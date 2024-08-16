import { SparkleIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'westTourPage',
  title: 'West Tour Page',
  type: 'document',
  icon: SparkleIcon,
  fieldsets: [
    // { name: 'hero', title: 'Hero Section', options: { collapsible: true } },
  ],
  fields: [],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'West Tour Page',
        title,
      }
    },
  },
})
