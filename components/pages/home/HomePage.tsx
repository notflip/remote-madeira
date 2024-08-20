import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import AboutSection from '@/components/blocks/AboutSection'
import ActivitySection from '@/components/blocks/ActivitySection'
import HeroSection from '@/components/blocks/HeroSection'
import type { HomePagePayload, TestimonialPayload } from '@/types'
import FeatureSection from '@/components/blocks/FeatureSection'
import CtaSection from '@/components/blocks/CtaSection'
import TestimonialSection from '@/components/blocks/TestimonialSection'

export interface HomePageProps {
  data: HomePagePayload | null
  testimonials: any
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({
  data,
  testimonials,
  encodeDataAttribute,
}: HomePageProps) {
  return (
    <>
      <HeroSection data={data} encodeDataAttribute={encodeDataAttribute} />
      <AboutSection data={data} encodeDataAttribute={encodeDataAttribute} />
      <ActivitySection data={data} />
      <FeatureSection data={data} />
      <CtaSection data={data} />
      <TestimonialSection data={data} testimonials={testimonials} />
    </>
  )
}

export default HomePage
