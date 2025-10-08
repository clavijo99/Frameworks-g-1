import pool from '../../../../lib/db';
import jwt from 'jsonwebtoken';
import { verifyAccessToken } from '@/app/api/auth/login/route';


export async function GET(req) {
    try {
        const result = await pool.query('SELECT * FROM products');
        return Response.json(result.rows, { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Error al obtener los productos', { status: 500 });
    }
}

export async function POST(req) {
    try {
        const token = req.headers.get('Authorization')?.split(' ')[1];
        if (!token) {
            return new Response('No autorizado', { status: 401 });
        }
        try {
            verifyAccessToken(token);
        }
        catch (error) {

            return new Response('Token inválido o expirado', { status: 401 });
        }
        const { name, description, price } = await req.json();
        const result = await pool.query(
            'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [name, description, price]
        );
        return Response.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response('Error al crear el producto', { status: 500 });
    }
}

