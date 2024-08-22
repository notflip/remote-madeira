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

export const westTourPageQuery = groq`
  *[_type == "westTourPage"][0] {
    _id,
  }
`
export const eastTourPageQuery = groq`
  *[_type == "eastTourPage"][0] {
    _id,
  }
`

export const privacyPolicyPageQuery = groq`
*[_type == "privacyPolicyPage"][0]{
  body
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
  price
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
      ogImage
    },
    "footer": *[_type == "footer"][0]{
      about
    }
  }
`
