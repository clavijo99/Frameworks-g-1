import pool from "@/lib/db";

import { verifyAccessToken, verifyRefreshToken } from "../login/route";
import { generateAccessToken } from "../login/route";

export async function POST(req) {

    try {
        const { refreshToken } = await req.json();

        if (!refreshToken) {
            return Response.json({ message: 'No se proporcionó el token de refresco' }, { status: 400 })
        }

        let payload;

        try {
            payload = verifyRefreshToken(refreshToken);
        } catch (error) {
            return Response.json({ message: 'Token de refresco inválido' }, { status: 401 })
        }

        const result = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [payload.id]
        )

        if (result.rows.length === 0) {
            return Response.json({ message: 'El usuario no existe' }, { status: 404 })
        }

        const user = result.rows[0];

        const { token, tokenRefresh } = generateAccessToken(user);

        return Response.json(
            { message: "Token refrescado exitosamente", token, tokenRefresh, }, { status: 200 }
        )

    } catch (error) {
        console.log(error);
        return new Response('Error al refrescar el token', { status: 500 });
    }
}