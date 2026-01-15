import { HomePage } from '@/components/pages/home/HomePage'
import { loadHomePage, loadQuery, loadSettings } from '@/sanity/loader/loadQuery'
import { TestimonialPayload } from '@/types'
import { testimonialsQuery } from '@/sanity/lib/queries'

export default async function IndexRoute() {
  const [homepageData, settingsData, testimonialData] = await Promise.all([
    loadHomePage(),
    loadSettings(),
    loadQuery<TestimonialPayload | null>(
      testimonialsQuery,
      {},
      { next: { tags: ['testimonial'] } },
    ),
  ])

  return (
    <HomePage data={homepageData.data} testimonials={testimonialData.data} settings={settingsData.data} />
  )
}
