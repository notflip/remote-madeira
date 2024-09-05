'use client'

import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { Nav, Tab } from 'react-bootstrap'

import { HomePagePayload } from '@/types'
import ImageBox from '@/components/shared/ImageBox'

export interface ActivitySectionProps {
  data: Partial<HomePagePayload> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function ActivitySection({
  data,
  encodeDataAttribute,
}: ActivitySectionProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { activityTitle, activityItems } = data ?? {}

  return (
    <section className="activity-section">
      <div className="activity-wrapper-bgc  text-white black-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Popular</span>
                <h2>{activityTitle}</h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={'tab1'}>
            <div className="row">
              <div className="col-lg-4">
                <div className="activity-nav-tab mb-50 wow fadeInLeft">
                  <Nav as="ul" className="nav nav-tabs">
                    {activityItems &&
                      activityItems.map((item, index) => (
                        <Nav.Item as="li" key={`tab${index + 1}`}>
                          <Nav.Link
                            as="a"
                            href={`#tab${index + 1}`}
                            className="nav-link"
                            eventKey={`tab${index + 1}`}
                          >
                            {item.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                  </Nav>
                </div>
              </div>
              <div className="col-lg-8">
                <Tab.Content className="tab-content mb-50 wow fadeInRight">
                  {activityItems &&
                    activityItems.map((item, index) => (
                      <Tab.Pane
                        key={`tab${index + 1}`}
                        className="tab-pane fade"
                        eventKey={`tab${index + 1}`}
                      >
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="activity-content-box pl-lg-40 lg:pb-32">
                              <h3 className="title">{item.subtitle}</h3>
                              <p>{item.description}</p>
                              {/*<ul className="check-list">
                                <li>
                                  <i className="fas fa-badge-check" />
                                  Family Camping
                                </li>
                                <li>
                                  <i className="fas fa-badge-check" />
                                  Couple Camping
                                </li>
                                <li>
                                  <i className="fas fa-badge-check" />
                                  Wild Camping
                                </li>
                              </ul>*/}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="activity-image-box">
                              <ImageBox
                                image={item.image}
                                width={600}
                                height={800}
                                alt="tour image"
                                classesWrapper="relative aspect-[2/2.5] radius-12"
                              />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    ))}
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </section>
  )
}
