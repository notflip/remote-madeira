import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Your allowed site URL from env
const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SANITY_STUDIO_SITE_URL

// Known malicious bot user agents (partial matches)
const BOT_PATTERNS = [
  'bot',
  'crawler',
  'spider',
  'scraper',
  'curl',
  'wget',
  'python-requests',
  'python-urllib',
  'go-http-client',
  'java/',
  'libwww',
  'httpunit',
  'nutch',
  'phpcrawl',
  'msnbot',
  'jyxobot',
  'fast-webcrawler',
  'convera',
  'gigabot',
  'yandex',
  'seznambot',
  'ahrefsbot',
  'semrushbot',
  'dotbot',
  'mj12bot',
  'blexbot',
  'petalbot',
  'dataforseo',
  'bytespider',
  'gptbot',
  'claudebot',
  'anthropic',
  'ccbot',
]

// Allowed bots (search engines we want)
const ALLOWED_BOTS = [
  'googlebot',
  'bingbot',
  'duckduckbot',
  'slurp', // Yahoo
  'facebot',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'telegrambot',
]

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return true // No user agent = suspicious

  const ua = userAgent.toLowerCase()

  // Allow known good bots
  for (const allowed of ALLOWED_BOTS) {
    if (ua.includes(allowed)) return false
  }

  // Block known bad bots
  for (const pattern of BOT_PATTERNS) {
    if (ua.includes(pattern)) return true
  }

  return false
}

function isAllowedOrigin(request: NextRequest): boolean {
  if (!ALLOWED_ORIGIN) return true // If not configured, skip this check

  const referer = request.headers.get('referer')
  const origin = request.headers.get('origin')

  // Check if referer or origin matches our allowed site URL
  if (referer && referer.startsWith(ALLOWED_ORIGIN)) return true
  if (origin && origin.startsWith(ALLOWED_ORIGIN)) return true

  // Also allow Sanity webhook calls to /api/revalidate (they come from Sanity servers)
  // These are authenticated via signature, so we allow them through
  if (request.nextUrl.pathname === '/api/revalidate') {
    return true
  }

  return false
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only apply to /api/ routes
  if (pathname.startsWith('/api/')) {
    // Allow Sanity webhook calls through without browser-header checks
    // (authenticated via signature inside the route handler)
    if (pathname === '/api/revalidate') {
      return NextResponse.next()
    }

    // First check: must come from allowed origin
    if (!isAllowedOrigin(request)) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    const userAgent = request.headers.get('user-agent')

    // Block bots from API routes entirely
    if (isBot(userAgent)) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    // Block requests with no user agent
    if (!userAgent || userAgent.length < 10) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    // Block if missing common browser headers (likely a bot/script)
    const acceptLanguage = request.headers.get('accept-language')
    const accept = request.headers.get('accept')

    if (!acceptLanguage && !accept) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
