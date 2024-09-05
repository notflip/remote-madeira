import TourSliderSection from '@/components/blocks/TourSliderSection'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import TestimonialSection from '@/components/blocks/TestimonialSection'
import Link from 'next/link'

export interface TourPageProps {
  data: any
  testimonials: any
  settings: any
}

export default function TourPage({
  data,
  testimonials,
  settings,
}: TourPageProps) {
  const whatsAppText = `Hi Remote Madeirs! I'm interested in the ${data.title} tour`

  return (
    <section className="place-details-section">
      <div className="">
        <TourSliderSection images={data.images} />
      </div>
      <div className="container !px-4 lg:px-0">
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
              <div className="place-content-wrap pt-45 wow fadeInUp mb-24 prose prose-lg">
                {data.content && (
                  <CustomPortableText
                    paragraphClasses=""
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
              <div className="sidebar-widget-area pl-lg-30">
                <div className="sidebar-widget booking-form-widget wow fadeInUp mb-40">
                  <h4 className="widget-title">Book Tour</h4>
                  <div className="submit-button">
                    <Link
                      href={`https://wa.me/${settings.phone.replace(/[^\d]/g, '')}?text=${whatsAppText}`}
                      className="flex gap-2 items-center px-4 py-2 rounded-lg text-white bg-[#25D366]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                        />
                      </svg>
                      <span className="font-medium">
                        Book this tour on WhatsApp
                      </span>
                    </Link>
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

      <TestimonialSection testimonials={testimonials} />
    </section>
  )
}
