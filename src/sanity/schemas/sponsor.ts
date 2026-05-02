import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "sponsor",
  fields: [
    defineField({
      type: "string",
      name: "title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "image",
      name: "image",
      description: "2x1, transparent",
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      type: "url",
      name: "url",
      title: "Website URL",
      validation: (rule) => rule.required(),
    }),
  ],
});
