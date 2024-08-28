'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { IconManager } from 'sanity-plugin-icon-manager'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { singletonPlugin } from '@/sanity/plugins/settings'
import page from '@/sanity/schemas/documents/page'
import homePage from '@/sanity/schemas/singletons/homePage'
import settings from '@/sanity/schemas/singletons/settings'

import testimonial from './sanity/schemas/documents/testimonial'
import tour from './sanity/schemas/documents/tour'
import footer from './sanity/schemas/singletons/footer'
import privacyPolicyPage from './sanity/schemas/singletons/privacyPolicyPage'
import { structure } from './sanity/structure'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Remote Madeira'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,

  scheduledPublishing: {
    enabled: false,
  },

  tasks: {
    enabled: false,
  },

  document: {
    comments: {
      enabled: false,
    },
  },

  schema: {
    types: [
      // Singletons
      homePage,
      privacyPolicyPage,

      settings,
      testimonial,
      footer,

      // Documents
      page,
      tour,
    ],
  },

  plugins: [
    IconManager({
      availableCollections: ['material-symbols'],
    }),

    structureTool({
      structure,
    }),

    // presentationTool({
    //   resolve,
    //   previewUrl: {
    //     previewMode: {
    //       enable: '/api/draft',
    //     },
    //   },
    // }),

    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([
      'homePage',
      'settings',
    ]),

    // Add an image asset source for Unsplash
    unsplashImageAsset(),

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
