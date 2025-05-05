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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {aboutItems &&
            aboutItems.map((item, index) => (
              <div key={index} className="single-features-item">
                <Link href={item.link} className="icon-btn block">
                  <div className="img-holder w-full">
                    <ImageBox
                      image={item.image}
                      width={800}
                      height={800}
                      size="300px"
                      alt="tour image"
                      classesWrapper="relative aspect-[2/2.5]"
                    />
                    <div className="content">
                      <div className="text">
                        <h4 className="title">{item.title}</h4>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
