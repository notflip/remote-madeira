import { defineField, defineType } from 'sanity'
import { DashboardIcon } from '@sanity/icons'

export default defineType({
  name: 'footer',
  type: 'document',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'about',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
