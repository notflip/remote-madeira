/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { defineDocuments, defineLocations } from 'sanity/presentation'

import { resolveHref } from '@/sanity/lib/utils'

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
  settings: defineLocations({
    message: 'This document is used on all pages',
    tone: 'caution',
  }),
  homePage: defineLocations({
    message: 'This document is used to render the front page',
    tone: 'positive',
    locations: [{ title: 'Home', href: resolveHref('homePage')! }],
  }),
  eastTourPage: defineLocations({
    message: 'This document is used to render the east tour page',
    tone: 'positive',
    locations: [
      { title: 'East Tour Page', href: resolveHref('eastTourPage')! },
    ],
  }),
  westTourPage: defineLocations({
    message: 'This document is used to render the west tour page',
    tone: 'positive',
    locations: [
      { title: 'West Tour Page', href: resolveHref('westTourPage')! },
    ],
  }),
  privateTourPage: defineLocations({
    message: 'This document is used to render the private tour page',
    tone: 'positive',
    locations: [
      { title: 'Private Tour Page', href: resolveHref('privateTourPage')! },
    ],
  }),
  wineTourPage: defineLocations({
    message: 'This document is used to render the wine tour page',
    tone: 'positive',
    locations: [
      { title: 'Wine Tour Page', href: resolveHref('wineTourPage')! },
    ],
  }),
  rockClimbingPage: defineLocations({
    message: 'This document is used to render the rock climbing tour page',
    tone: 'positive',
    locations: [
      {
        title: 'Rock Climbing Tour Page',
        href: resolveHref('rockClimbingPage')!,
      },
    ],
  }),
  picoPage: defineLocations({
    message: 'This document is used to render the pico das torres tour page',
    tone: 'positive',
    locations: [
      { title: 'Pico Das Torres Tour Page', href: resolveHref('picoPage')! },
    ],
  }),
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
