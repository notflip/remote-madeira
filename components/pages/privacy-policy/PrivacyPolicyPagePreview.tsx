'use client'

import { privacyPolicyPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import PrivacyPolicyPage from './PrivacyPolicyPage'

export default function PrivacyPolicyPagePreview(props) {
  const { initial } = props

  const { data, encodeDataAttribute } = useQuery(
    privacyPolicyPageQuery,
    {},
    { initial },
  )

  return (
    <PrivacyPolicyPage data={data} encodeDataAttribute={encodeDataAttribute} />
  )
}
