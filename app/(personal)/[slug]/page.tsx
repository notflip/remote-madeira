import { loadQuery } from '@/sanity/loader/loadQuery'
import { tourQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import TourPagePreview from '@/components/pages/tour/TourPagePreview'
import TourPage from '@/components/pages/tour/TourPage'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'

export function generateStaticParams() {
  return generateStaticSlugs('tour')
}

export default async function PageSlugRoute({params}) {
  const initial = await loadQuery<any | null>(
    tourQuery,
    { slug: params.slug },
    { next: { tags: ['tour'] } },
  )

  if (draftMode().isEnabled) {
    return <TourPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <TourPage data={initial.data} />
}
