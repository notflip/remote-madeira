import AboutSection from '@/components/blocks/AboutSection'
import ActivitySection from '@/components/blocks/ActivitySection'
import CtaSection from '@/components/blocks/CtaSection'
import FeatureSection from '@/components/blocks/FeatureSection'
import HeroSection from '@/components/blocks/HeroSection'
import TestimonialSection from '@/components/blocks/TestimonialSection'
import type { HomePagePayload, TestimonialPayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  testimonials: TestimonialPayload | null
  settings: any
}

export function HomePage({ data, testimonials, settings }: HomePageProps) {
  return (
    <>
      <HeroSection data={data} />
      <AboutSection data={data} />
      <ActivitySection data={data} />
      <FeatureSection data={data} />
      <CtaSection data={data} settings={settings} />
      <TestimonialSection testimonials={testimonials} />
    </>
  )
}

export default HomePage
