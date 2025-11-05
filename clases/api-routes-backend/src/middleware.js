import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { verifyAccessToken } from './app/api/auth/login/route'


export function middleware(request) {

    const routesPublic = ['/api/auth/login', '/api/auth/register']

    if(routesPublic.some( route => request.nextUrl.pathname.startsWith(route) )){
        return NextResponse.next()
    }

    const token = request.headers.get('Authorization')?.split(" ")[1]

    if (!token) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 })
    }

    try{
        verifyAccessToken(token)
        return NextResponse.next()
    } catch(error){
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }
}

export const config = {
    matcher: ['/api/:path*'],
    runtime: 'nodejs',
}