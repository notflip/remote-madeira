import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  eager?: boolean
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 800,
  height = 800,
  size = '100vw',
  classesWrapper,
  eager = false,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div
      className={`w-full overflow-hidden rounded-[3px] ${classesWrapper}`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Image
          quality={90}
          className="absolute h-full w-full object-cover"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          loading={eager ? 'eager' : 'lazy'}
        />
      )}
    </div>
  )
}
