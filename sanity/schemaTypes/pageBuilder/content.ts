import { defineField, defineType, type PortableTextTextBlock } from "sanity";

export default defineType({
  type: "object",
  name: "content",
  validation: (rule) => rule.required(),
  fields: [
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
      title: "content",
    },
    prepare({ title }) {
      const firstBlock = (title || []).find(
        (block: any) => block._type === "block",
      ) as PortableTextTextBlock;
      const titleText = firstBlock?.children.map((item) => item.text).join("");

      return {
        title: titleText,
        subtitle: "Content",
      };
    },
  },
});
