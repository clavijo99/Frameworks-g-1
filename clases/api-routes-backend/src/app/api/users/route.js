import pool from '@/lib/db';


export async function GET(req) {
    try{
        const result = await pool.query('SELECT * FROM users');
        return  Response.json(result.rows, { status: 200 });
    } catch(error){
        console.log(error);
        return new Response('Error al obtener los usuarios', { status: 500 });
    }
    
}