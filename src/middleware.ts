import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
)

// Define protected routes
const protectedRoutes = ['/dashboard', '/assessment', '/results']
const authRoutes = ['/login', '/register']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Get token from cookies or authorization header
  const token = request.cookies.get('token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '')

  // If accessing protected route
  if (isProtectedRoute) {
    if (!token) {
      // Redirect to login if no token
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    try {
      // Verify JWT token
      await jwtVerify(token, JWT_SECRET)
      // Token is valid, continue
      return NextResponse.next()
    } catch (error) {
      // Token is invalid, redirect to login
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      const response = NextResponse.redirect(loginUrl)
      response.cookies.delete('token')
      return response
    }
  }

  // If accessing auth routes while logged in
  if (isAuthRoute && token) {
    try {
      await jwtVerify(token, JWT_SECRET)
      // User is logged in, redirect to dashboard
      return NextResponse.redirect(new URL('/dashboard', request.url))
    } catch (error) {
      // Token is invalid, continue to auth page
      const response = NextResponse.next()
      response.cookies.delete('token')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
