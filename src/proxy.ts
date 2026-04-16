import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

// Simple in-memory rate limiter (For production on Vercel Edge, use @upstash/ratelimit)
const rateLimitMap = new Map<string, { count: number, lastReset: number }>()

export async function proxy(request: NextRequest) {
  // --- 1. Rate Limiting (from old middleware) ---
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

  // --- 2. Supabase Auth (from original proxy) ---
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  const protectedRoutes = ["/dashboard", "/market", "/budget", "/calculators", "/finscore", "/news"]
  const isProtected = protectedRoutes.some(r => request.nextUrl.pathname.startsWith(r))
  const isAuthPage = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup"

  if (!user && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // --- 3. Security Headers (from old middleware) ---
  supabaseResponse.headers.set('X-DNS-Prefetch-Control', 'on')
  supabaseResponse.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  supabaseResponse.headers.set('X-XSS-Protection', '1; mode=block')
  supabaseResponse.headers.set('X-Frame-Options', 'SAMEORIGIN')
  supabaseResponse.headers.set('X-Content-Type-Options', 'nosniff')
  supabaseResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return supabaseResponse
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
