'use client'

import Image from 'next/image'
import Slider from '@ant-design/react-slick'
import { urlForImage } from '@/sanity/lib/utils'

const placeSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  // @todo uncomment for live
  // autoplay: true,
  variableWidth: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

interface TourSliderSectionProps {
  images: any[]
}

export default function TourSliderSection({ images }: TourSliderSectionProps) {
  const imagesWithUrls = images.map((image) => urlForImage(image)?.url())

  return (
    <Slider {...placeSlider} className="place-slider">
      {imagesWithUrls.map((imageUrl, index) => (
        <div className="place-slider-item" key={index}>
          <div className="place-img relative">
            <Image
              src={imageUrl}
              width={500}
              height={0}
              alt="Picture of the author"
            />
          </div>
        </div>
      ))}
    </Slider>
  )
}
