import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { HomePagePayload } from '@/types'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/utils'
import ImageBox from '../shared/ImageBox'

export interface CtaSectionProps {
  data: Partial<HomePagePayload> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function CtaSection({
  data,
  encodeDataAttribute,
}: CtaSectionProps) {
  const { ctaTitle, ctaImage } = data ?? {}

  const imageUrl =
    ctaImage &&
    urlForImage(ctaImage)?.height(1000).width(1920).fit('crop').url()

  return (
    <section className="cta-bg overlay bg_cover pt-140 pb-150 relative">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <ImageBox
          image={ctaImage}
          width={1920}
          height={800}
          alt="tour image"
          classesWrapper="relative h-full"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="cta-content-box text-center text-white wow fadeInDown">
              <h2 className="mb-35">{ctaTitle}</h2>
              <Link className="main-btn primary-btn" href="/about">
                Check Availability
                <i className="far fa-paper-plane" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
