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

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
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
