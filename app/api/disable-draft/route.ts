import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Only allow requests from same origin (prevent bot abuse)
  const referer = request.headers.get('referer')
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')

  // Check if request comes from our own site
  const isValidReferer = referer && host && referer.includes(host)
  const isValidOrigin = origin && host && origin.includes(host)

  if (!isValidReferer && !isValidOrigin) {
    return new Response('Forbidden', { status: 403 })
  }

  // Only disable if draft mode is actually enabled
  const draft = await draftMode()
  if (!draft.isEnabled) {
    return new Response('Not in draft mode', { status: 400 })
  }

  draft.disable()
  const url = new URL(request.nextUrl)
  return NextResponse.redirect(new URL('/', url.origin))
}
