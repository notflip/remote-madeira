import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

import { Footer } from '@/components/global/Footer'
import Header from '@/components/global/Header/HeaderLayout'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing'),
)

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.settings.ogImage)

  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.subtitle,
    metadataBase: new URL('https://remotemadeira.com'),
    alternates: {
      canonical: './',
    },
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = await loadSettings()

  return (
    <>
      <Suspense>
        <Header settings={data.settings} />
      </Suspense>
      <div>
        <Suspense>{children}</Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>

      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
