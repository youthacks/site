import {defineArrayMember, defineField, defineType, type PortableTextTextBlock} from 'sanity'

export default defineType({
  type: 'object',
  name: 'hero',
  fields: [
    defineField({
      type: 'string',
      name: 'subtitle',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'title',
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: 'block',
          options: {oneLine: true},
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
          lists: [],
          styles: [],
        }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'description',
      of: [
        defineArrayMember({
          type: 'block',
          options: {oneLine: true},
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}],
            annotations: [],
          },
          lists: [],
          styles: [],
        }),
      ],
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
    defineField({
      type: 'boolean',
      name: 'transparent',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}) {
      const firstBlock = (title || []).find(
        (block: any) => block._type === 'block',
      ) as PortableTextTextBlock
      const titleText = firstBlock?.children.map((item) => item.text).join('')

      return {
        title: titleText,
        subtitle: 'Hero',
        media,
      }
    },
  },
})
