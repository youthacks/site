import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "homeEvents",
  fields: [
    defineField({
      type: "string",
      name: "title",
      placeholder: "Recent events",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "number",
      name: "noOfEvents",
      description: "Number of recent events to display",
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      type: "string",
      name: "viewMore",
      placeholder: "View more events",
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
        subtitle: "Home Events",
      };
    },
  },
});
