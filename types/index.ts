import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  title: string
  subtitle: string
  heroImage: Image
  aboutTitle: string
  aboutSubtitle: string
  aboutItems: Array<any>
  activityTitle: string
  activityItems: Array<any>
  featureTitle: string
  featureItems: Array<any>
  ctaTitle: string
  ctaImage: Image
  testimonialTitle: string
  testimonialItems: Array<{
    text: string
    name: string
  }>
}

export interface Tours {
  title: string
  subtitle: string
  slug: string
  description: string
  coverImage: any
  region?: string
  maxPersons?: string
  price?: string
}
export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface TestimonialPayload {
  name: string
  text: string
}

export interface SettingsPayload {
  settings: {
    logo: Image
    footer?: PortableTextBlock[]
    ogImage?: Image
  }
  footer: {
    about: string
  }
}
