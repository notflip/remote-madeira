/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { defineDocuments } from 'sanity/presentation'

export const mainDocuments = defineDocuments([
  // {
  //   route: '/projects/:slug',
  //   filter: `_type == "project" && slug.current == $slug`,
  // },
  {
    route: '/:slug',
    filter: `_type == "page" && slug.current == $slug`,
  },
])

export const locations = {
  // page: defineLocations({
  //   select: { title: 'title', slug: 'slug.current' },
  //   resolve: (doc) => ({
  //     locations: [
  //       {
  //         title: doc?.title || 'Untitled',
  //         href: resolveHref('page', doc?.slug)!,
  //       },
  //     ],
  //   }),
  // }),
}
