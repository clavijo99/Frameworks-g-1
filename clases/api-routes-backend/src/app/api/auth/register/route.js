import pool from '@/lib/db';
import bcrypt from 'bcrypt';


export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        const hashedPasword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            'INSERT INTO users ( name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
            [name, email, hashedPasword]
        );

        return  Response.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response('Error al registrar el usuario', { status: 500 });
    }
}