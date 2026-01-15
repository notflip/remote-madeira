import 'server-only'

import * as queryStore from '@sanity/react-loader'

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
  stega: false,
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 */
queryStore.setServerClient(serverClient)

/**
 * Static data fetching - caches indefinitely and revalidates via webhook tags.
 * Pages are fully static and will be regenerated when content changes in Sanity.
 */
export const loadQuery = ((query, params = {}, options = {}) => {
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate: false, // Cache indefinitely, revalidate via tags
      ...(options.next || {}),
    },
    perspective: 'published',
    stega: false,
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