import { loadQuery } from '@/sanity/loader/loadQuery'
import { westTourPageQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import WestTourMadeiraPage from '@/components/pages/west-tour-madeira/WestTourMadeiraPage'
import { draftMode } from 'next/headers'
import WestTourMadeiraPagePreview from '@/components/pages/west-tour-madeira/WestTourMadeiraPagePreview'

export default async function PageSlugRoute() {
  const initial = await loadQuery<any | null>(
    westTourPageQuery,
    {},
    { next: { tags: ['westTourPage'] } },
  )

  if (draftMode().isEnabled) {
    return <WestTourMadeiraPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <WestTourMadeiraPage data={initial.data} />
}
