import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

export interface PrivacyPolicyPageProps {
  data: any
  encodeDataAttribute?: EncodeDataAttributeCallback
}
export default function PrivacyPolicyPage({
  data,
  encodeDataAttribute,
}: PrivacyPolicyPageProps) {
  const { body } = data ?? {}

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
                <h1 className="page-title">Privacy Policy</h1>
                <ul className="breadcrumb-link text-white">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-100 pb-50">
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )}
      </section>
    </div>
  )
}
