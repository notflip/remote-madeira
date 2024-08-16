'use client'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import Slider from 'react-slick'

import { HomePagePayload } from '@/types'

const sliderActive4Item = {
  dots: false,
  arrows: false,
  infinite: true,
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
      <div className="container-fluid">
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
        <Slider
          {...sliderActive4Item}
          className="slider-active-4-item wow fadeInUp"
        >
          {/* Slider item */}
          <div className="single-features-item mb-40">
            <div className="img-holder">
              <img
                src="assets/images/features/feat-1.jpg"
                alt="Features Image"
              />
              <div className="content">
                <div className="text">
                  <h4 className="title">Wonderful West</h4>
                  <Link href="/west-tour-madeira" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <p>
                  Be amazed by spectacular waterfalls, astonishing cliffs, calm
                  valleys and enchanting forests.
                </p>
              </div>
            </div>
          </div>

          {/* Slider item */}
          <div className="single-features-item mb-40">
            <div className="img-holder">
              <img
                src="assets/images/features/feat-2.jpg"
                alt="Features Image"
              />
              <div className="content">
                <div className="text">
                  <h4 className="title">Enchanting East</h4>
                  <Link href="/east-tour-madeira" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <p>
                  This wonderful 4x4 tour of East Madeira takes you to the
                  island’s heights.
                </p>
              </div>
            </div>
          </div>

          {/* Slider item */}
          <div className="single-features-item mb-40">
            <div className="img-holder">
              <img
                src="assets/images/features/feat-3.jpg"
                alt="Features Image"
              />
              <div className="content">
                <div className="text">
                  <h4 className="title">Private Tour</h4>
                  <Link href="/private-tour-madeira" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <p>Explore Madeira the way you want it.</p>
              </div>
            </div>
          </div>
          <div className="single-features-item mb-40">
            <div className="img-holder">
              <img
                src="assets/images/features/feat-4.jpg"
                alt="Features Image"
              />
              <div className="content">
                <div className="text">
                  <h4 className="title">Wine tasting tour</h4>
                  <Link href="/wine-tour-madeira" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <p>
                  Wine lovers, this one’s for you! Join us on a top-notch wine
                  tour.
                </p>
              </div>
            </div>
          </div>
          <div className="single-features-item mb-40">
            <div className="img-holder">
              <img
                src="assets/images/features/feat-1.jpg"
                alt="Features Image"
              />
              <div className="content">
                <div className="text">
                  <h4 className="title">Climbing tour</h4>
                  <Link href="/rock-climbing-madeira" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <p>
                  Experienced climber or just dipping your toes in the water?
                </p>
              </div>
            </div>
          </div>
          <div className="single-features-item mb-40">
            <div className="img-holder">
              <img
                src="assets/images/features/feat-2.jpg"
                alt="Features Image"
              />
              <div className="content">
                <div className="text">
                  <h4 className="title">Pico das Torres summit</h4>
                  <Link href="/climb-pico-das-torres" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <p>
                  Calling all adventurous souls! Put on your hiking boots and
                  follow us.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
