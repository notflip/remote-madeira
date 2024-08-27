import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    _id,
    title,
    subtitle,
    heroImage,
    aboutTitle,
    aboutSubtitle,
    aboutItems[] {
      title,
      description,
      image,  
      link->{_id, title}
    },
    activityTitle,
    activityItems,
    featureTitle,
    featureItems[] {
      ...,
      "icon": icon.icon
    },
    ctaTitle,
    ctaImage,
    testimonialTitle,
  }
`

export const privacyPolicyPageQuery = groq`
*[_type == "privacyPolicyPage"][0]{
  body
}
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"]{
    name,
    text
  }
`

export const settingsQuery = groq`
  {
    "settings": *[_type == "settings"][0]{
      footer,
      logo,
      logoLarge,
      mail,
      phone,
      address,
      ogImage
    },
    "footer": *[_type == "footer"][0]{
      about
    }
  }
`

export const toursQuery = groq`
*[_type == "tour"] | order(order asc) {
  title,
  subtitle,
  "slug": slug.current, 
  description,
  coverImage,
  region,
  maxPersons,
  minAge,
  price
}
`

export const tourQuery = groq`
*[_type == "tour" && slug.current == $slug] | order(order asc) [0] {
  title,
  subtitle,
  "slug": slug.current, 
  description,
  images[] {
     alt,
    asset,
    "dimensions": asset->metadata.dimensions
  },
  coverImage,
  region,
  duration,
  maxPersons,
  minAge,
  price,
  content,
  extraImages
}
`
