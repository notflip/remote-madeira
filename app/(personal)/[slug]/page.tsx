import { loadQuery, loadSettings } from '@/sanity/loader/loadQuery'
import { testimonialsQuery, tourQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import TourPagePreview from '@/components/pages/tour/TourPagePreview'
import TourPage from '@/components/pages/tour/TourPage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { TestimonialPayload } from '@/types'

export function generateStaticParams() {
  return generateStaticSlugs('tour')
}

export default async function PageSlugRoute({params}) {
  const initial = await loadQuery<any | null>(
    tourQuery,
    { slug: params.slug },
    { next: { tags: ['tour'] } },
  )

  const { data: settingsData } = await loadSettings()

  const testimonialData = await loadQuery<TestimonialPayload | null>(
    testimonialsQuery,
    {},
    {
      next: { tags: [`testimonial`] },
    },
  )

  if (draftMode().isEnabled) {
    return <TourPagePreview initial={initial} testimonials={testimonialData} settings={settingsData} />
  }

  if (!initial.data) {
    notFound()
  }

  return <TourPage data={initial.data} testimonials={testimonialData.data} settings={settingsData.settings} />
}
