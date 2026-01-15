import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import ToursPage from '@/components/pages/tours/ToursPage'
import { toursQuery } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/loader/loadQuery'

const ToursPagePreview = dynamic(
  () => import('@/components/pages/tours/ToursPagePreview'),
)

export default async function Tours() {
  const initial = await loadQuery<any | null>(
    toursQuery,
    {},
    { next: { tags: ['tour'] } },
  )

  if (draftMode().isEnabled) {
    return <ToursPagePreview initial={initial} />
  }

  return <ToursPage tours={initial.data} />
}
