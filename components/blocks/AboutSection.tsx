import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import ImageBox from '@/components/shared/ImageBox'
import { HomePagePayload } from '@/types'

export interface AboutSectionProps {
  data: Partial<HomePagePayload> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function AboutSection({ data }: AboutSectionProps) {
  const { aboutTitle, aboutSubtitle, aboutItems } = data ?? {}

  return (
    <section className="about-section py-[100px]">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="about-content-box text-center mb-55 wow fadeInDown">
              <div className="section-title mb-30">
                <span className="sub-title">About Remote Madeira</span>
                <h2>{aboutTitle}</h2>
              </div>
              <p>{aboutSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {aboutItems &&
            aboutItems.map((item, index) => (
              <Link href={item.link} className="relative group" key={index}>
                <ImageBox
                  image={item.image}
                  width={800}
                  height={800}
                  size="300px"
                  alt="tour image"
                  className="rounded-[12px]"
                  classesWrapper="relative aspect-[2/2] lg:aspect-[2/2.5]"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 max-w-[75%] group-hover:-translate-y-2 transition">
                  <div className="mb-4 w-[45px] h-[3px] bg-[#63ab45]"></div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
