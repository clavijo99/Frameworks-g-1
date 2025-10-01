import pool from '@/lib/db'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export async function POST(req) {

    try{

        const { email , password } = await req.json();

        const veryfyUser = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        )

        if(veryfyUser.rows.length > 0){

            const validatePassword = await bcrypt.compare(password, veryfyUser.rows[0].password);

            if(validatePassword){
                const token = jwt.sign(
                    {email: veryfyUser.rows[0].email, id: veryfyUser.rows[0].id},
                    'my-secret-key-1234',
                    {expiresIn: '1d'}
                )
                return Response.json(
                    {message: "Inicio de sesión exitoso", token}, {status: 200}
                )
            }
            return Response.json(
                {message: "Las credenciales son incorrectas"}, {status: 200}
            )

        }
        return Response.json(
            {message: "El correo no se encuentra registrado"},
        )


    } catch(error){
        console.log(error);
        return new Response('Error al iniciar sesión', { status: 500 });
    }
    
}