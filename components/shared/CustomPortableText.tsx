import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity'
import { Nav, Tab } from 'react-bootstrap'

import ImageBox from '@/components/shared/ImageBox'
import { Image } from 'sanity'
import PortableTextTabs from '@/components/portable/PortableTextTabs'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      tourSteps: ({ value }) => <PortableTextTabs value={value} />,
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-3">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[3/2]"
            />
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
