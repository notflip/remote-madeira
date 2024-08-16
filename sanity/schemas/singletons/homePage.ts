import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fieldsets: [
    { name: 'hero', title: 'Hero Section', options: { collapsible: true } },
    { name: 'about', title: 'About Section', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'hero',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'hero',
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description:
        'This image will be used as the cover image for the project. If you choose to add it to the show case projects, this is the image displayed in the list within the homepage.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fieldset: 'hero',
    }),

    // About Section
    defineField({
      name: 'aboutTitle',
      type: 'string',
      title: 'About Title',
      validation: (rule) => rule.required(),
      fieldset: 'about',
    }),

    defineField({
      name: 'aboutSubtitle',
      type: 'text',
      title: 'About Subtitle',
      validation: (rule) => rule.required(),
      fieldset: 'about',
    }),

    defineField({
      name: 'aboutItems',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'reference',
          to: [
            {
              type: 'westTourPage',
            },
            {
              type: 'eastTourPage',
            },
            {
              type: 'privateTourPage',
            },
            {
              type: 'wineTourPage',
            },
            {
              type: 'rockClimbingPage',
            },
            {
              type: 'picoPage',
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
