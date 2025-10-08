import pool from "@/lib/db";
import { verifyAccessToken } from "../auth/login/route";


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

        try{
        const token = req.headers.get('Authorization').split(" ")[1]

        verifyAccessToken(token)
        } catch(error){
            return new Response('Error de autenticación', { status: 401 });
        }

        const { name, description, price, stock } = await req.json();
        const
            result = await pool.query(
                'INSERT INTO products ( name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
                [name, description, price, stock]
            );
        return Response.json({
            "data": result.rows[0],
        }, { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response('Error al crear el producto', { status: 500 });
    }
}
