'use client'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { HomePagePayload } from '@/types'
import ImageBox from '@/components/shared/ImageBox'

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
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={8}
          slidesPerView={1.5}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
          }}
        >
          {aboutItems &&
            aboutItems.map((item, index) => (
              <SwiperSlide key={index} className="single-features-item mb-4">
                <Link href={item.link} className="icon-btn block">
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
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
