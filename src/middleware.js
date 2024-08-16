import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTTokenHelper";

export async function middleware(req) {
    try {
        const token = req.cookies.get('token');
        if (!token) {
            throw new Error('Token not found');
        }

        const payload = await VerifyToken(token);

        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('email', payload.email);
        requestHeaders.set('id', payload.id);

        return NextResponse.next({
            request: {
                headers: requestHeaders
            }
        });
    } catch (error) {
        if (req.url.startsWith('/api/')) {
            return NextResponse.json({ status: 'fail', data: 'unauthorized' }, { status: 401 });
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
}

export const config = {
    matcher: [
        // '/api/cart/:path*',
        // '/api/invoice/:path*',
        // '/api/user/:path*',
        // '/api/user/review/:path*',
        // '/api/wish/:path*',
    ]
};
