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
  *[_type == "settings"][0]{
    footer,
    logo,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage
  }
`
