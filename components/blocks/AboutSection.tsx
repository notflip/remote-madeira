'use client'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import Slider from '@ant-design/react-slick'

import { HomePagePayload } from '@/types'
import { resolveHref } from '@/sanity/lib/utils'
import ImageBox from '@/components/shared/ImageBox'

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 800,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export interface AboutSectionProps {
  data: Partial<HomePagePayload> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function AboutSection({
  data,
  encodeDataAttribute,
}: AboutSectionProps) {
  const { aboutTitle, aboutSubtitle, aboutItems } = data ?? {}

  return (
    <section className="about-section pt-100">
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
        <Slider
          {...sliderSettings}
          className="slider-active-4-item wow fadeInUp"
        >
          {aboutItems &&
            aboutItems.map((item, index) => (
              <div className="single-features-item mb-40" key={index}>
                <div className="img-holder w-full">
                  <ImageBox
                    image={item.image}
                    width={800}
                    height={800}
                    alt="tour image"
                    classesWrapper="relative aspect-[2/2.5]"
                  />
                  <div className="content">
                    <div className="text">
                      <h4 className="title">{item.title}</h4>
                      {resolveHref(item.link._id) && (
                        <Link
                          href={resolveHref(item.link._id)!}
                          className="icon-btn"
                        >
                          <i className="far fa-arrow-right" />
                        </Link>
                      )}
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}
