import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import AboutSection from '@/components/blocks/AboutSection'
import HeroSection from '@/components/blocks/HeroSection'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  return (
    <>
      <HeroSection data={data} encodeDataAttribute={encodeDataAttribute} />
      <AboutSection data={data} encodeDataAttribute={encodeDataAttribute} />
    </>
  )
}

export default HomePage
