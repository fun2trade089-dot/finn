import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiter (For production on Vercel Edge, use @upstash/ratelimit)
const rateLimitMap = new Map<string, { count: number, lastReset: number }>()

export function middleware(request: NextRequest) {
  // Only apply rate limiting to auth APIs and high-value endpoints
  if (request.nextUrl.pathname.startsWith('/api/auth/')) {
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'anonymous'
    const now = Date.now()
    const windowMs = 60 * 1000 // 1 minute window
    const maxRequests = 10     // 10 requests per minute

    const record = rateLimitMap.get(ip)

    if (!record) {
      rateLimitMap.set(ip, { count: 1, lastReset: now })
    } else {
      if (now - record.lastReset > windowMs) {
        // Reset window
        rateLimitMap.set(ip, { count: 1, lastReset: now })
      } else if (record.count >= maxRequests) {
        // Rate limit exceeded
        console.warn(`[Security] Rate limit exceeded for IP: ${ip}`)
        return new NextResponse(
          JSON.stringify({ error: "Too many requests. Please try again later." }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        )
      } else {
        // Increment
        record.count++
        rateLimitMap.set(ip, record)
      }
    }
  }

  // Security Headers
  const response = NextResponse.next()

  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
