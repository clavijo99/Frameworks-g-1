import pool from '../../../../../lib/db'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//const keyAccess = 'my-secret-key-1234';
//const keyRefresh = 'my-secret-key-admin-1234';

export async function POST(req) {

    try {

        const { email, password } = await req.json();

        const veryfyUser = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        )

        if (veryfyUser.rows.length > 0) {

            const validatePassword = await bcrypt.comparar(password, veryfyUser.rows[0].password);

            if (validatePassword) {

                const { token, tokenRefresh } = generateAccessToken(veryfyUser.rows[0]);

                return Response.json(
                    { message: "Inicio de sesión exitoso", token, tokenRefresh, }, { status: 200 }
                )
            }
            return Response.json(
                { message: "Las credenciales son incorrectas" }, { status: 200 }
            )

        }
        return Response.json(
            { message: "El correo no se encuentra registrado" },
        )


    } catch (error) {
        console.log(error);
        return new Response('Error al iniciar sesión', { status: 500 });
    }

}



export function verifyAccessToken(token) {
    return jwt.verify(token, keyAccess)
}


export function verifyRefreshToken(token) {
    return jwt.verify(token, keyRefresh)
}



export function generateAccessToken(user) {
    const token = jwt.sign(
        { email: user.email, id: user.id },
        keyAccess,
        { expiresIn: '15m' }
    )
    const tokenRefresh = jwt.sign(
        { email: user.email, id: user.id },
        keyRefresh,
        { expiresIn: '1h' }
    )
    return { token, tokenRefresh };
}
