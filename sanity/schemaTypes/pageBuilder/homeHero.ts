import {
  defineArrayMember,
  defineField,
  defineType,
  type PortableTextTextBlock,
} from "sanity";

export default defineType({
  type: "object",
  name: "homeHero",
  fields: [
    defineField({
      type: "array",
      name: "title",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "block",
          options: { oneLine: true },
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
            annotations: [],
          },
          lists: [],
          styles: [],
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "description",
      of: [
        defineArrayMember({
          type: "block",
          options: { oneLine: true },
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
            annotations: [],
          },
          lists: [],
          styles: [],
        }),
      ],
    }),
    defineField({
      type: "image",
      name: "image",
      fields: [
        defineField({
          type: "string",
          name: "caption",
        }),
      ],
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      type: "array",
      name: "buttons",
      of: [
        defineArrayMember({
          type: "object",
          name: "homeHeroButton",
          fields: [
            defineField({
              type: "string",
              name: "label",
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: "boolean",
              name: "isPrimary",
              initialValue: false,
            }),
            defineField({
              type: "reference",
              name: "link",
              to: { type: "page" },
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      const firstBlock = (title || []).find(
        (block: any) => block._type === "block",
      ) as PortableTextTextBlock;
      const titleText = firstBlock?.children.map((item) => item.text).join("");

      return {
        title: titleText,
        subtitle: "Home Hero",
        media,
      };
    },
  },
});
