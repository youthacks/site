import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "event",
  fields: [
    defineField({
      type: "string",
      name: "title",
      validation: (rule) => rule.required(),
    }),
  ],
});
