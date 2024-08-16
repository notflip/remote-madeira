import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { HomePagePayload } from '@/types'

import ImageBox from '../shared/ImageBox'

export interface HeroSectionProps {
  data: Partial<HomePagePayload> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function HeroSection({
  data,
  encodeDataAttribute,
}: HeroSectionProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, subtitle, heroImage } = data ?? {}

  return (
    <section className="hero-section">
      <div className="hero-wrapper black-bg">
        <div className="single-slider">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="hero-content text-white">
                  <h1 data-animation="fadeInDown" data-delay=".4s">
                    {title}
                  </h1>
                  <div className="text-button d-flex align-items-center">
                    <p data-animation="fadeInLeft" data-delay=".5s">
                      {subtitle}
                    </p>
                    {/* <div
                      className="hero-button"
                      data-animation="fadeInRight"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn primary-btn">
                          Explore More
                          <i className="fas fa-paper-plane" />
                        </a>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="hero-image" data-animation="fadeInRight">
                  <ImageBox
                    data-sanity={encodeDataAttribute?.('coverImage')}
                    image={heroImage}
                    width={1200}
                    height={900}
                    alt=""
                    classesWrapper="relative aspect-[3/2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
