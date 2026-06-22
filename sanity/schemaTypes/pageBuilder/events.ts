import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "events",
  fields: [
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
    select: {},
    prepare() {
      return {
        title: "All events",
        subtitle: "Events",
      };
    },
  },
});
