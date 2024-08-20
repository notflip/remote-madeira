'use client'

import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { HomePagePayload, TestimonialPayload } from '@/types'
import Slider from '@ant-design/react-slick'

export interface TestimonialSectionProps {
  data: Partial<HomePagePayload> | null
  testimonials: any
  encodeDataAttribute?: EncodeDataAttributeCallback
}

const testimonialSlider = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 800,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export default function TestimonialSection({
  data,
  testimonials,
  encodeDataAttribute,
}: TestimonialSectionProps) {
  const { testimonialTitle } = data ?? {}

  return (
    <section className="testimonial-section bg_cover pt-100 pb-100 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2>What Our Traveler Say About Our Tour Services</h2>
            </div>
          </div>
        </div>
        <Slider {...testimonialSlider} className="slider-active-3-item-dot">
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <div className="gw-testimonial-item-two" key={index}>
                <div className="testimonial-inner-content">
                  <div className="quote-rating-box">
                    <div className="ratings-box">
                      <ul className="ratings">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="author-thumb-title">
                    <div className="author-title mt-4">
                      <h3 className="title">{testimonial.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}
