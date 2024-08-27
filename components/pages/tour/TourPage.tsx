import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import TourSliderSection from '@/components/blocks/TourSliderSection'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

export interface TourPageProps {
  data: any
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function TourPage({ data, encodeDataAttribute }: TourPageProps) {
  return (
    <section className="place-details-section">
      <div className="place-slider-area overflow-hidden wow fadeInUp">
        <TourSliderSection images={data.images} />
      </div>
      <div className="container">
        <div className="tour-details-wrapper pt-80">
          <div className="tour-title-wrapper pb-30 wow fadeInUp">
            <div className="row">
              <div className="col-xl-6">
                <div className="tour-title mb-20">
                  <h3 className="title">{data.title}</h3>
                  <p className="font-serif text-xl text-gray-600">{data.description}</p>
                  <p className="mt-4">
                    <i className="far fa-map-marker-alt" />
                    {data.region}
                  </p>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tour-widget-info">
                  {data.price && (
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-box-usd" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>From</span>&euro; {data.price}
                        </h4>
                      </div>
                    </div>
                  )}
                  {data.duration && (
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Duration</span>
                          {data.duration}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="place-content-wrap pt-45 wow fadeInUp mb-24">
                {data.content && (
                  <CustomPortableText
                    paragraphClasses="font-serif max-w-3xl text-gray-600 text-lg"
                    value={data.content}
                  />
                )}
              </div>
              {/*=== Calendar Box ===*/}
              {/*=== Releted Tour Place ===*/}
              {/*<RelatedTours />*/}

              {/*=== Reviews Area ===*/}
              {/*=== Comments Area ===*/}
              {/*===  Comments Form  ===*/}
            </div>
            <div className="col-xl-4">
              <div className="sidebar-widget-area pt-60 pl-lg-30">
                <div className="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                  <h4 className="widget-title">Tour Information</h4>
                  <ul className="info-list">
                    {data.maxPersons && (
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Max Guests<span>{data.maxPersons}</span>
                        </span>
                      </li>
                    )}
                    {data.minAge && (
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Minimum Age<span>{data.minAge}+</span>
                        </span>
                      </li>
                    )}
                    <li>
                      <span>
                        <i className="far fa-map-marker-alt" />
                        Tour Location<span>Thailand</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-globe" />
                        Language<span>English</span>
                      </span>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Place Widget ===*/}
                <div className="sidebar-widget recent-place-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Last Minute Deals</h4>
                  <ul className="recent-place-list">
                    <li className="place-thumbnail-content">
                      <img
                        src="assets/images/place/thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="place-content">
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
                            <i className="far fa-star" />
                          </li>
                        </ul>
                        <h5>
                          <Link href="/tour-details">
                            Infinity Pool Nears Beach
                          </Link>
                        </h5>
                        <span className="price">
                          <span className="text">From :</span>
                          <span className="currency">$</span>45.23
                        </span>
                      </div>
                    </li>
                    <li className="place-thumbnail-content">
                      <img
                        src="assets/images/place/thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="place-content">
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
                            <i className="fas fa-star-half-alt" />
                          </li>
                        </ul>
                        <h5>
                          <Link legacyBehavior href="/tour-details">
                            <a>Infinity Pool Nears Beach</a>
                          </Link>
                        </h5>
                        <span className="price">
                          <span className="text">From :</span>
                          <span className="currency">$</span>45.23
                        </span>
                      </div>
                    </li>
                    <li className="place-thumbnail-content">
                      <img
                        src="assets/images/place/thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="place-content">
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
                        <h5>
                          <Link legacyBehavior href="/tour-details">
                            <a>Infinity Pool Nears Beach</a>
                          </Link>
                        </h5>
                        <span className="price">
                          <span className="text">From :</span>
                          <span className="currency">$</span>45.23
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Banner Widget ===*/}
                <div className="sidebar-widget sidebar-banner-widget wow fadeInUp mb-40">
                  <div className="banner-widget-content">
                    <div className="banner-img">
                      <img
                        src="assets/images/blog/banner-1.jpg"
                        alt="Post Banner"
                      />
                      <div className="hover-overlay">
                        <div className="hover-content">
                          <h4 className="title">
                            <a href="#">Swimming Pool</a>
                          </h4>
                          <p>
                            <i className="fas fa-map-marker-alt" />
                            Marrakesh, Morocco
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
