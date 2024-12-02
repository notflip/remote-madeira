import { loadQuery, loadSettings } from '@/sanity/loader/loadQuery'
import { testimonialsQuery, tourQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import TourPage from '@/components/pages/tour/TourPage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { TestimonialPayload } from '@/types'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'

export function generateStaticParams() {
  return generateStaticSlugs('tour')
}

export async function generateMetadata({ params }) {
  const { data } = await loadQuery<any | null>(tourQuery, { slug: params.slug })

  return {
    title: data?.title ?? 'Remote Madeira',
    description: data?.description ?? '',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      images: data?.images?.map(urlForOpenGraphImage)?.[0] || '',
    },
  }
}

export default async function PageSlugRoute({ params }) {
  const initial = await loadQuery<any | null>(tourQuery, { slug: params.slug })

  const { data: settingsData } = await loadSettings()

  const testimonialData = await loadQuery<TestimonialPayload | null>(
    testimonialsQuery,
    {},
    {
      next: { tags: [`testimonial`] },
    },
  )

  if (!initial.data) {
    notFound()
  }

  return (
    <TourPage
      data={initial.data}
      testimonials={testimonialData.data}
      settings={settingsData.settings}
    />
  )
}
