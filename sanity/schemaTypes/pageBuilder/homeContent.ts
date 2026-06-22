import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "homeContent",
  fields: [
    defineField({
      type: "string",
      name: "title",
      placeholder: "Support us",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "contentBlock",
      name: "content",
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: "string",
      name: "color",
      options: {
        list: [
          { value: "red", title: "Red" },
          { value: "yellow", title: "Yellow" },
          { value: "blue", title: "Blue" },
          { value: "grey", title: "Grey" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Home Content",
      };
    },
  },
});
