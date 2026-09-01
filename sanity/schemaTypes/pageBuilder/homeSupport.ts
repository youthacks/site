import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'homeSupport',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      placeholder: 'Support us',
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
      validation: (rule) => rule.required().length(2),
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
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Home Support',
      }
    },
  },
})
