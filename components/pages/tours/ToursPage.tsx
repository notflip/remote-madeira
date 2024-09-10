import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import ImageBox from '@/components/shared/ImageBox'
import { Tours } from '@/types'

export interface ToursPageProps {
  tours: Tours[] | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}
export default function ToursPage({
  tours,
  encodeDataAttribute,
}: ToursPageProps) {
  return (
    <div>
      <section
        className="page-banner overlay pt-170 pb-220 bg_cover"
        style={{ backgroundImage: 'url(assets/images/bg/page-bg.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="page-banner-content text-center text-white">
                <h1 className="page-title">Tours</h1>
                <ul className="breadcrumb-link text-white">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Tours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="places-section pb-100">
        <div className="container py-16">
          <div className="row">
            {tours &&
              tours.map((tour, index) => (
                <div
                  className="col-xl-4 col-md-6 col-sm-12 places-column"
                  key={index}
                >
                  <div className="single-place-item mb-60 wow fadeInUp">
                    <div className="place-img">
                      <ImageBox
                        image={tour.coverImage}
                        width={600}
                        height={500}
                        size="500px"
                        alt="tour image"
                        classesWrapper="relative aspect-[4/3] radius-12"
                      />
                    </div>
                    <div className="place-content">
                      <div className="info">
                        <h4 className="title">
                          <Link href={`/${tour.slug}`}>{tour.title}</Link>
                        </h4>
                        {tour.region && (
                          <p className="location">
                            <i className="far fa-map-marker-alt" />
                            {tour.region}
                          </p>
                        )}
                        <p className="my-2 leading-normal">
                          {tour.description.length > 200
                            ? `${tour.description.slice(0, 200)}...`
                            : tour.description}
                        </p>
                        <div className="meta flex">
                          {tour.price && (
                            <span>
                              <i className="fas fa-usd-circle" />
                              <span className="currency">&euro;</span>
                              {tour.price}
                            </span>
                          )}
                          {tour.maxPersons && (
                            <span>
                              <i className="far fa-user" />
                              {tour.maxPersons}
                            </span>
                          )}
                          <span className="ml-auto">
                            <Link href={`/${tour.slug}`}>
                              Details
                              <i className="far fa-long-arrow-right" />
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
