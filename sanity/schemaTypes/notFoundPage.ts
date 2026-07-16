import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  type: 'document',
  name: 'notFoundPage',
  fields: [
    defineField({
      type: 'string',
      name: 'subtitle',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'description',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            decorators: [],
            annotations: [],
          },
          lists: [],
          styles: [],
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: 'backButtonLabel',
      placeholder: 'Go to homepage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      fields: [
        defineField({
          type: 'string',
          name: 'caption',
        }),
      ],
    }),
  ],
})
