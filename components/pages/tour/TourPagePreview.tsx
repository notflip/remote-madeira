'use client'

import { tourQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import TourPage from './TourPage'

export default function TourPagePreview(props) {
  const { initial } = props

  const { data, encodeDataAttribute } = useQuery(
    tourQuery,
    {},
    { initial },
  )

  return <TourPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
