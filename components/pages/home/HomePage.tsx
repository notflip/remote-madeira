import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import AboutSection from '@/components/blocks/AboutSection'
import ActivitySection from '@/components/blocks/ActivitySection'
import HeroSection from '@/components/blocks/HeroSection'
import type { HomePagePayload } from '@/types'
import FeatureSection from '@/components/blocks/FeatureSection'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  return (
    <>
      <HeroSection data={data} encodeDataAttribute={encodeDataAttribute} />
      <AboutSection data={data} encodeDataAttribute={encodeDataAttribute} />
      <ActivitySection data={data} />
      <FeatureSection data={data} />
    </>
  )
}

export default HomePage
