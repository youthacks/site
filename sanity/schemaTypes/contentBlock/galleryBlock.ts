import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "galleryBlock",
  validation: (rule) => rule.required(),
  fields: [
    defineField({
      type: "array",
      name: "images",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "image",
          fields: [
            defineField({
              type: "string",
              name: "caption",
            }),
          ],
          validation: (rule) => rule.required().assetRequired(),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      return {
        title: `${images?.length || 0} images`,
        subtitle: "Gallery",
      };
    },
  },
});
