import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname and search parameters of the request
  const { pathname, searchParams } = request.nextUrl

  // Check if the user has just registered
  const justRegistered = searchParams.get('registered') === 'true'

  // If we're already on the login page, don't redirect
  if (pathname.startsWith('/login')) {
    return NextResponse.next()
  }

  // If we're at the root path (/) and the user has just registered, allow access
  if (pathname === '/' && justRegistered) {
    return NextResponse.next()
  }

  // If we're at the root path (/) and the user hasn't just registered, redirect to login
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // For all other paths, continue as normal
  return NextResponse.next()
}

// Configure the paths that this middleware will run on
export const config = {
  matcher: ['/', '/login']
} 