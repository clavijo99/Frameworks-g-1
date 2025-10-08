// middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  // Rutas públicas (sin autenticación)
  const publicRoutes = ["/api/auth/login", "/api/auth/register"];

  // Si la ruta actual es pública → permitir acceso
  if (publicRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Leer token del header Authorization: Bearer <token>
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Token requerido" }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: "Token inválido o expirado" }, { status: 401 });
  }
}

// Se aplica solo a las rutas de la API
export const config = {
  matcher: ["/api/:path*"],
};
