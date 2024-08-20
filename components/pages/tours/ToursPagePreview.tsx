'use client'

import { toursQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import ToursPage from './ToursPage'

export default function ToursPagePreview(props) {
  const { initial } = props

  const { data: tours, encodeDataAttribute } = useQuery(
    toursQuery,
    {},
    { initial },
  )

  return <ToursPage tours={tours} encodeDataAttribute={encodeDataAttribute} />
}
