import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import TourSliderSection from '@/components/blocks/TourSliderSection'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'

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
              <div className="col-xl-6 mb-4 lg:mb-0">
                <div className="tour-title mb-20">
                  <h3 className="title">{data.title}</h3>
                  <p className="font-serif text-xl text-gray-600">
                    {data.description}
                  </p>
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
                <div className="sidebar-widget booking-form-widget wow fadeInUp mb-40">
                  <h4 className="widget-title">Book Tour</h4>
                  <div className="submit-button">
                    <button className="main-btn primary-btn text-left">
                      Book {data.subtitle}
                      <i className="far fa-paper-plane" />
                    </button>
                  </div>
                </div>

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
                    {data.region && (
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Tour Location<span>{data.region}</span>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
                {data.extraImages &&
                  data.extraImages.map((extraImage, index) => (
                    <div
                      className="sidebar-widget sidebar-banner-widget wow fadeInUp mb-40"
                      key={index}
                    >
                      <div className="banner-widget-content">
                        <div className="banner-img">
                          <ImageBox
                            image={extraImage.image}
                            width={500}
                            height={500}
                            alt="tour image"
                            classesWrapper="relative aspect-[4/3] radius-12"
                          />
                          <div className="hover-overlay">
                            <div className="hover-content">
                              {extraImage.title && (
                                <h4 className="title">{extraImage.title}</h4>
                              )}
                              {extraImage.location && (
                                <p>
                                  <i className="fas fa-map-marker-alt" />
                                  {extraImage.location}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
