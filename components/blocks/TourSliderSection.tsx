'use client'

import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/utils'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface TourSliderSectionProps {
  images: any[]
}

export default function TourSliderSection({ images }: TourSliderSectionProps) {
  const imagesWithUrls = images?.map((image) =>
    urlForImage(image)?.width(700).height(700).fit('crop').url(),
  )

  return (
    <Swiper
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
      {imagesWithUrls &&
        imagesWithUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            {imageUrl && (
              <Image
                width={400}
                height={400}
                sizes="400px"
                src={imageUrl}
                className="h-full w-full object-cover"
                alt="image"
              />
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
