import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'mail',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'logoLarge',
      type: 'image',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
