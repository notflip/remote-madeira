import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  homePageQuery,
  settingsQuery,
  testimonialsQuery,
} from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'
import { HomePagePayload, SettingsPayload, TestimonialPayload } from '@/types'

const serverClient = client.withConfig({
  token,
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === 'preview',
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

/**
 * Handles data fetching with proper caching:
 * - In draft mode: fetches fresh data with previewDrafts perspective
 * - In production: caches indefinitely with tag-based revalidation via webhook
 */
export const loadQuery = ((query, params = {}, options = {}) => {
  const isDraftMode = draftMode().isEnabled
  const {
    perspective = isDraftMode ? 'previewDrafts' : 'published',
  } = options

  // In draft mode: no caching. In production: cache indefinitely (revalidate via tags)
  const revalidate: NextFetchRequestConfig['revalidate'] = isDraftMode ? 0 : false

  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // Enable stega in Draft Mode for overlays outside Sanity Studio
    stega: isDraftMode,
  })
}) satisfies typeof queryStore.loadQuery

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings() {
  return loadQuery<SettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'homePage', 'privacyPolicyPage'] } },
  )
}

export function loadHomePage() {
  return loadQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { next: { tags: ['homePage'] } },
  )
}