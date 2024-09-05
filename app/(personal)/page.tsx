import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { HomePage } from '@/components/pages/home/HomePage'
import { loadHomePage, loadQuery, loadSettings } from '@/sanity/loader/loadQuery'
import { TestimonialPayload } from '@/types'
import { testimonialsQuery } from '@/sanity/lib/queries'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const homepageData = await loadHomePage()
  const settingsData = await loadSettings()
  const testimonialData = await loadQuery<TestimonialPayload | null>(
    testimonialsQuery,
    {},
    {
      next: { tags: [`testimonial`] },
    },
  )

  if (draftMode().isEnabled) {
    return (
      <HomePagePreview initial={homepageData} testimonials={testimonialData} settings={settingsData} />
    )
  }

  return (
    <HomePage data={homepageData.data} testimonials={testimonialData.data} settings={settingsData.data} />
  )
}
