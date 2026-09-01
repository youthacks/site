import {
  defineField,
  defineType,
} from "sanity";

export default defineType({
  type: "object",
  name: "seo",

  fields: [
    defineField({
      type: "text",
      name: "description",
      rows: 3,
      validation: (rule) => [
        rule.max(160).warning("Description should be less than 160 characters"),
      ],
    }),
    defineField({
      type: "image",
      name: "image",
      description: "1200x630, appears in social media previews.",
    }),
    defineField({
      type: "boolean",
      name: "noIndex",
      description: "If enabled, this page will not be indexed by search engines.",
      initialValue: false,
    })
  ],
});
