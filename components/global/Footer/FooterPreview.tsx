'use client'

import { useSettings } from '@/sanity/loader/useQuery'

import FooterLayout from './FooterLayout'

type Props = {
  initial: Parameters<typeof useSettings>[0]
}

export default function FooterPreview({ initial }: Props) {
  const { data } = useSettings(initial)

  return <FooterLayout data={data!} />
}
