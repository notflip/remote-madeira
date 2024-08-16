import { SparkleIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'wineTourPage',
  title: 'Wine Tour Page',
  type: 'document',
  icon: SparkleIcon,
  fieldsets: [
    { name: 'hero', title: 'Hero Section', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      fieldset: 'hero',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Wine Tour Page',
        title,
      }
    },
  },
})
