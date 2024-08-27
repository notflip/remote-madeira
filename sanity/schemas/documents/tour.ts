import { DocumentIcon, LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import { SlugInput } from '@/sanity/components/SlugInput'

import { getSeoFields } from '../objects/seoFields'

export default defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  icon: DocumentIcon,
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO & Social',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Address on the website',
      description:
        "Defines the URL of the page, don't change this unless you know what you're doing",
      options: {
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      components: {
        input: SlugInput,
      },
    }),

    defineField({
      name: 'description',
      type: 'text',
      description: 'This is the short introduction description',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'images',
      type: 'array',
      validation: (rule) => rule.required().min(4),
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt',
              description:
                '⚡ The alt tag is used by screen readers and search engines to determine what this image is about',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'The general location of the tour',
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Enter the price of the tour',
    }),

    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'The text with the duration, for example: 4 hours, half day',
    }),

    defineField({
      name: 'maxPersons',
      title: 'Maximum Persons',
      type: 'number',
      description: 'Enter the maximum persons allowed for this tour',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'minAge',
      title: 'Minimum Age',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description: 'This image will be used as the cover image for the tour',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: 'array',
      name: 'content',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt',
              description:
                '⚡ The alt tag is used by screen readers and search engines to determine what this image is about',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description:
                'When this value is filled, this text will be shown underneath the image',
            }),
          ],
        },
        // {
        //   name: 'tourSteps',
        //   title: 'Tour Steps',
        //   type: 'object',
        //   fields: [
        //     defineField({
        //       type: 'array',
        //       name: 'steps',
        //       of: [
        //         {
        //           name: 'step',
        //           type: 'object',
        //           fields: [
        //             {
        //               type: 'string',
        //               name: 'title',
        //               validation: (rule) => rule.required().max(30),
        //             },
        //             {
        //               type: 'text',
        //               name: 'text',
        //               validation: (rule) => rule.required(),
        //             },
        //           ],
        //         },
        //       ],
        //     }),
        //   ],
        //   preview: {
        //     select: {
        //       steps: 'steps',
        //     },
        //     prepare(selection: any) {
        //       const { steps } = selection
        //
        //       return {
        //         title: 'Tour Steps',
        //         subtitle: `${steps?.length ?? 0} steps`,
        //       }
        //     },
        //   },
        // },
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                icon: LinkIcon,
                title: 'Internal Link',
                fields: [
                  defineField({
                    name: 'reference',
                    type: 'reference',
                    title: 'Referentie',
                    to: [
                      { type: 'homePage' },
                      { type: 'eastTourPage' },
                      { type: 'westTourPage' },
                      { type: 'privateTourPage' },
                      { type: 'wineTourPage' },
                      { type: 'rockClimbingPage' },
                      { type: 'picoPage' },
                    ],
                  }),
                ],
              },
              {
                name: 'externalLink',
                type: 'object',
                icon: LinkIcon,
                title: 'External Link',
                fields: [
                  defineField({
                    name: 'url',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: false,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  }),
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'In which order should these tours be shown',
      validation: (Rule) => Rule.required(),
    }),

    // SEO & Socials
    ...getSeoFields({ fieldset: 'seo' }),
  ],
})
