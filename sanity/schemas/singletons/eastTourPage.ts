import { SparkleIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'eastTourPage',
  title: 'East Tour',
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
        subtitle: 'East Tour Page',
        title,
      }
    },
  },
})
