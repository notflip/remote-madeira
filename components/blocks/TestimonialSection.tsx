'use client'

import { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';


export interface TestimonialSectionProps {
  testimonials: any
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function TestimonialSection({
  testimonials,
  encodeDataAttribute,
}: TestimonialSectionProps) {
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
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={8}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
          }}
        >
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <SwiperSlide className="gw-testimonial-item-two" key={index}>
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
