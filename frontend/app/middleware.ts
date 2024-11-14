import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const authCookie = request.cookies.get('access_token'); // Adjust based on your auth token implementation

    // Check for the auth token
    if (!authCookie) {
        return NextResponse.redirect(new URL('/', request.url)); // Redirect to login if not authenticated
    }

    return NextResponse.next(); // Continue to the requested route if authenticated
}

// Apply middleware only to protected routes
export const config = {
    matcher: ['/face_libro/*', '/face_libro/user_profile/[username]/*'], // Define protected routes
};
