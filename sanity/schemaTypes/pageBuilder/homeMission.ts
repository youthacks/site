import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'homeMission',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      placeholder: 'Our mission',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'contentBlock',
      name: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'images',
      validation: (rule) => rule.required().length(3),
      of: [
        defineArrayMember({
          type: 'image',
          validation: (rule) => rule.required().assetRequired(),
        }),
      ],
    }),

    defineField({
      type: 'string',
      name: 'color',
      options: {
        list: [
          {value: 'red', title: 'Red'},
          {value: 'yellow', title: 'Yellow'},
          {value: 'blue', title: 'Blue'},
          {value: 'grey', title: 'Grey'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Home Mission',
        media,
      }
    },
  },
})
