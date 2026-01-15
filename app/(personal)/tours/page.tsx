import ToursPage from '@/components/pages/tours/ToursPage'
import { toursQuery } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/loader/loadQuery'

export default async function Tours() {
  const initial = await loadQuery<any | null>(
    toursQuery,
    {},
    { next: { tags: ['tour'] } },
  )

  return <ToursPage tours={initial.data} />
}
