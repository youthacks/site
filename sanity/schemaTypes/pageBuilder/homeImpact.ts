import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "homeImpact",
  fields: [
    defineField({
      type: "string",
      name: "title",
      placeholder: "Our impact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "array",
      name: "statistics",
      validation: (rule) => rule.required().length(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "homeImpactStatistic",
          fields: [
            defineField({
              type: "string",
              name: "number",
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: "string",
              name: "label",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "number",
              subtitle: "label",
            },
          },
        }),
      ],
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
        subtitle: "Home Impact",
      };
    },
  },
});
