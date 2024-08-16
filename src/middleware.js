import { NextResponse } from 'next/server';
import { VerifyToken } from './utility/JWTTokenHelper';

export async function middleware(req) {
    try {
        // Get the token from cookies
        const tokenCookie = req.cookies.get('token');
        
        // Ensure the token is in the expected format
        if (!tokenCookie || typeof tokenCookie.value !== 'string') {
            throw new Error('Token not found or invalid token format');
        }

        // Verify the token
        const payload = await VerifyToken(tokenCookie.value);

        // Create new headers with email and id
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('email', payload.email);
        requestHeaders.set('id', payload.id);

        // Return the response with updated headers
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    } catch (error) {
        console.error('Error in middleware:', error.message);
        if (req.url.startsWith('/api/')) {
            return NextResponse.json({ status: 'fail', data: 'unauthorized' }, { status: 401 });
        } else {
            return NextResponse.redirect(new URL('/user/login', req.url));
        }
    }
}

export const config = {
    matcher: [
        '/api/cart/:path*',
        '/api/invoice/:path*',
        '/api/user/profile/:path*',
        '/api/user/review',
        '/api/wish/:path*',
        '/user/profile/:path*',
    ],
};
