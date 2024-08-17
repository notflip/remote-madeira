import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { HomePagePayload } from '@/types'
import { Icon } from '@iconify/react'

export interface FeatureSectionProps {
  data: Partial<HomePagePayload> | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function FeatureSection({
  data,
  encodeDataAttribute,
}: FeatureSectionProps) {
  const { featureItems } = data ?? {}

  return (
    <section className="features-section py-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">Services</span>
              <h2>We offer some of the best servies on the island</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {featureItems &&
            featureItems.map((item, index) => (
              <div className="col-lg-6 col-md-12 mb-30" key={index}>
                <div className="fancy-icon-box mb-30 wow fadeInUp d-flex h-100">
                  <div className="icon">
                    <Icon icon={item.icon} />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
