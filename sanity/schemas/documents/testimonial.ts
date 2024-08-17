import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      description: 'The name of the reviewer',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'text',
      title: 'Text',
      validation: (rule) => rule.required(),
    }),
  ],
})
