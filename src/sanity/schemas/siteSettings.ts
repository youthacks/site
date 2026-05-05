import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "siteSettings",
  fields: [
    defineField({
      type: "string",
      name: "siteName",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "reference",
      name: "indexPage",
      to: { type: "page" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "navbar",
      name: "navbar",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "footer",
      name: "footer",
      validation: (rule) => rule.required(),
    }),
  ],
});
