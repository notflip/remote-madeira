import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'about',
      title: 'About Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'activity',
      title: 'Activity Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'features',
      title: 'Features Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cta',
      title: 'Call To Action Section',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'testimonials',
      title: 'Testimonials Section',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'hero'
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'hero'
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (rule) => rule.required(),
      fieldset: 'hero'
    }),

    // About Section
    defineField({
      name: 'aboutTitle',
      type: 'string',
      title: 'About Title',
      validation: (rule) => rule.required(),
      fieldset: 'about'
    }),

    defineField({
      name: 'aboutSubtitle',
      type: 'text',
      title: 'About Subtitle',
      validation: (rule) => rule.required(),
      fieldset: 'about'
    }),

    defineField({
      name: 'aboutItems',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'aboutItem',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
              validation: (rule) => rule.required()
            }),
            defineField({
              type: 'string',
              name: 'description',
              title: 'Description',
              description:
                'Short description that goes underneat the title, max 200 characters',
              validation: (rule) => rule.required().max(200)
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Tour Image',
              validation: (rule) => rule.required(),
              options: {
                hotspot: true
              },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt',
                  description:
                    '⚡ The alt tag is used by screen readers and search engines to determine what this image is about'
                })
              ]
            }),
            defineField({
              name: 'link',
              type: 'string',
              options: {
                list: [
                  { title: 'Homepage', value: '/' },
                  { title: 'West Tour Page', value: '/west-tour-madeira' },
                  { title: 'East Tour Page', value: '/east-tour-madeira' },
                  { title: 'PrivateTour Page', value: '/private-tour-madeira' },
                  { title: 'Wine Tour Page', value: '/wine-tour-madeira' },
                  { title: 'Rock Climbing Page', value: '/rock-climbing-madeira' },
                  { title: 'Pico Das Torres Page', value: '/climb-pico-das-torres' },
                ]
              },
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            },
            prepare({ title, media }) {
              return {
                title: title || 'No title',
                media: media
              }
            }
          }
        })
      ],
      fieldset: 'about'
    }),

    // Activity Section
    defineField({
      name: 'activityTitle',
      type: 'string',
      title: 'Activity Title',
      validation: (rule) => rule.required(),
      fieldset: 'activity'
    }),

    defineField({
      name: 'activityItems',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'activityItem',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
              validation: (rule) => rule.required()
            }),
            defineField({
              type: 'string',
              name: 'subtitle',
              title: 'Subtitle',
              validation: (rule) => rule.required()
            }),
            defineField({
              type: 'string',
              name: 'description',
              title: 'Description',
              validation: (rule) => rule.required()
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Tour Image',
              validation: (rule) => rule.required(),
              options: {
                hotspot: true
              },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt',
                  description:
                    '⚡ The alt tag is used by screen readers and search engines to determine what this image is about'
                })
              ]
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            },
            prepare({ title, media }) {
              return {
                title: title || 'No title',
                media: media
              }
            }
          }
        })
      ],
      fieldset: 'activity'
    }),

    defineField({
      name: 'featureTitle',
      type: 'string',
      title: 'Features Title',
      validation: (rule) => rule.required(),
      fieldset: 'features'
    }),

    // Services Section
    defineField({
      name: 'featureItems',
      type: 'array',
      of: [
        defineField({
          name: 'featureItem',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Feature Item Title',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'description',
              type: 'string',
              validation: (rule) => rule.required().max(200)
            }),
            defineField({
              type: 'icon.manager',
              name: 'icon',
              title: 'Icon'
            })
          ]
        })
      ],
      fieldset: 'features'
    }),

    // Cta Section
    defineField({
      name: 'ctaTitle',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'cta'
    }),
    defineField({
      name: 'ctaImage',
      title: 'CTA Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (rule) => rule.required(),
      fieldset: 'cta'
    }),

    // Testimonial Section
    defineField({
      name: 'testimonialTitle',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'testimonials'
    })
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title
      }
    }
  }
})
