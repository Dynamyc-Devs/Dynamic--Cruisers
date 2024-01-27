// pages/middleware/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // TODO: Implement your middleware logic, e.g., for route protection

  // Example: Redirect unauthenticated users to the login page
  const currentUser = request.cookies.get('currentUser')?.value;

  if (!currentUser) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Example: Redirect authenticated users to the dashboard
  return NextResponse.redirect(new URL('/dashboard', request.url));
}

export const config = {
  matcher: ['/dashboard', '/profile'], // Specify routes that require authentication
};
