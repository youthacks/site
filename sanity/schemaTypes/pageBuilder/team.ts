import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'team',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      placeholder: 'Our team',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'members',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'teamMember',
          fields: [
            defineField({
              type: 'string',
              name: 'name',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'string',
              name: 'role',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'image',
              name: 'photo',
            }),
            defineField({
              type: 'text',
              name: 'bio',
              rows: 3,
            }),
            defineField({
              type: 'string',
              name: 'github',
              title: 'GitHub Username',
            }),
            defineField({
              type: 'url',
              name: 'website',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'photo',
            },
          },
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
        subtitle: 'Team',
      }
    },
  },
})
