'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { IconManager } from 'sanity-plugin-icon-manager'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { singletonPlugin } from '@/sanity/plugins/settings'
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import duration from '@/sanity/schemas/objects/duration'
import milestone from '@/sanity/schemas/objects/milestone'
import timeline from '@/sanity/schemas/objects/timeline'
import eastTourPage from '@/sanity/schemas/singletons/eastTourPage'
import homePage from '@/sanity/schemas/singletons/homePage'
import picoPage from '@/sanity/schemas/singletons/picoPage'
import privateTourPage from '@/sanity/schemas/singletons/privateTourPage'
import rockClimbingPage from '@/sanity/schemas/singletons/rockClimbingPage'
import settings from '@/sanity/schemas/singletons/settings'
import westTourPage from '@/sanity/schemas/singletons/westTourPage'
import wineTourPage from '@/sanity/schemas/singletons/wineTourPage'

import { structure } from './sanity/structure'
import testimonial from './sanity/schemas/documents/testimonial'
import footer from './sanity/schemas/singletons/footer'

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
      westTourPage,
      eastTourPage,
      privateTourPage,
      wineTourPage,
      rockClimbingPage,
      picoPage,
      settings,
      testimonial,
      footer,

      // Documents
      duration,
      page,
      project,

      // Objects
      milestone,
      timeline,
    ],
  },

  plugins: [
    IconManager({
      availableCollections: ['material-symbols'],
    }),

    structureTool({
      structure,
    }),

    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),

    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin(['homePage', 'eastTourPage', 'westTourPage', 'settings']),

    // Add an image asset source for Unsplash
    unsplashImageAsset(),

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
