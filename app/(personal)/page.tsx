import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { HomePage } from '@/components/pages/home/HomePage'
import { loadHomePage, loadQuery } from '@/sanity/loader/loadQuery'
import { TestimonialPayload } from '@/types'
import { testimonialsQuery } from '@/sanity/lib/queries'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

export default async function IndexRoute() {
  const homepageData = await loadHomePage()
  const testimonialData = await loadQuery<TestimonialPayload | null>(
    testimonialsQuery,
    {},
    {
      next: { tags: [`testimonial`] },
    },
  )

  if (draftMode().isEnabled) {
    return (
      <HomePagePreview initial={homepageData} testimonials={testimonialData} />
    )
  }

  return (
    <HomePage data={homepageData.data} testimonials={testimonialData.data} />
  )
}
