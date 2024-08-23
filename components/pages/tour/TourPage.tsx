import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import TourSliderSection from '@/components/blocks/TourSliderSection'

export interface TourPageProps {
  data: any
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function TourPage({
  data,
  encodeDataAttribute,
}: TourPageProps) {
  console.log(data)

  return (
    <section className="place-details-section">
      <div className="place-slider-area overflow-hidden wow fadeInUp">
        <TourSliderSection images={data.images} />
      </div>
      <div className="container">
        {/*=== Tour Details Wrapper ===*/}
        <div className="tour-details-wrapper pt-80">
          {/*=== Tour Title Wrapper ===*/}
          <div className="tour-title-wrapper pb-30 wow fadeInUp">
            <div className="row">
              <div className="col-xl-6">
                <div className="tour-title mb-20">
                  <h3 className="title">Boat Traveling on Made River</h3>
                  <p>
                    <i className="far fa-map-marker-alt" />
                    Tambon Khlong Sok, Thailand
                  </p>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tour-widget-info">
                  <div className="info-box mb-20">
                    <div className="icon">
                      <i className="fal fa-box-usd" />
                    </div>
                    <div className="info">
                      <h4>
                        <span>From</span>$96.54
                      </h4>
                    </div>
                  </div>
                  <div className="info-box mb-20">
                    <div className="icon">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="info">
                      <h4>
                        <span>Durations</span>7 Days
                      </h4>
                    </div>
                  </div>
                  <div className="info-box mb-20">
                    <div className="icon">
                      <i className="fal fa-planet-ringed" />
                    </div>
                    <div className="info">
                      <h4>
                        <span>Tour Type</span>City Tour
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="place-content-wrap pt-45 wow fadeInUp">
                <h3 className="title">Explore Tours</h3>
                <p>
                  Sed ut perspiciatis unde omniste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam, eaque ip
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor si amet consectetur adipisci velit sed quian numquam
                  eius modi tempora incidunt ut labore dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam qunostrum
                  exercitationem ullam corporis suscipit laboriosaey nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur veillum qui dolorem voluptas nulla
                  pariatur
                </p>
                <h4>Advance Facilities</h4>
                <p>
                  Neque porro quisquam est dolorem ipsum quia dolor si amet
                  consectetur adipisci velit sed quian numquam eius tempora
                  incidunt labore dolore magnam aliquam quaerat voluptatem.
                </p>
                <div className="row align-items-lg-center">
                  <div className="col-lg-5">
                    <ul className="check-list">
                      <li>
                        <i className="fas fa-badge-check" />
                        Parking in the Camp
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Pick and Drop Services
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Washing Machines
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Cruise Dinner &amp; Music Event
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Visit 5 Best Places With Group
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Motorhome service
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />1 Meal Per Day
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7">
                    <img
                      src="assets/images/place/single-place-4.jpg"
                      className="mb-20 w-100"
                      alt="place image"
                    />
                  </div>
                </div>
                <h4>Tour Plan</h4>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur vel eillum qui
                  dolorem eum fugiat quo voluptas nulla pariatur
                </p>
              </div>
              {/*=== Map Box ===*/}
              <div className="map-box mb-60 wow fadeInUp">
                <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              </div>
              {/*=== Calendar Box ===*/}
              <div className="calendar-wrapper wow fadeInUp">
                <div className="calendar-container mb-45" />
              </div>
              {/*=== Releted Tour Place ===*/}
              {/*<RelatedTours />*/}

              {/*=== Reviews Area ===*/}
              {/*=== Comments Area ===*/}
              {/*===  Comments Form  ===*/}
            </div>
            <div className="col-xl-4">
              {/*=== Sidebar Widget Area ===*/}
              <div className="sidebar-widget-area pt-60 pl-lg-30">
                {/*=== Booking Widget ===*/}
                {/*=== Booking Info Widget ===*/}
                <div className="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                  <h4 className="widget-title">Tour Information</h4>
                  <ul className="info-list">
                    <li>
                      <span>
                        <i className="far fa-user-circle" />
                        Max Guests<span>35</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-user-circle" />
                        Minimum Age<span>12+</span>
                      </span>
                    </li>
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
