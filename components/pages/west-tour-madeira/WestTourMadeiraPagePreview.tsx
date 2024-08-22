'use client'

import { westTourPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import WestTourMadeiraPage from './WestTourMadeiraPage'

export default function WestTourMadeiraPagePreview(props) {
  const { initial } = props

  const { data, encodeDataAttribute } = useQuery(
    westTourPageQuery,
    {},
    { initial },
  )

  return (
    <WestTourMadeiraPage
      data={data}
      encodeDataAttribute={encodeDataAttribute}
    />
  )
}
