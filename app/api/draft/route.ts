import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'

const clientWithToken = client.withConfig({ token })

export async function GET(request: Request) {
  const url = new URL(request.url)

  // Early rejection: require secret parameter before making any Sanity API calls
  // This prevents bots from triggering expensive API calls
  if (!url.searchParams.has('sanity-preview-secret')) {
    return new Response('Missing required parameters', { status: 400 })
  }

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  )
  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(redirectTo)
}
