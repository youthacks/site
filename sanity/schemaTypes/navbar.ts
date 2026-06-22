import {
  ALL_FIELDS_GROUP,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export default defineType({
  type: "object",
  name: "navbar",

  fields: [
    defineField({
      type: "image",
      name: "logo",
      validation: (rule) => rule.required(),
    }),

    defineField({
      type: "array",
      name: "links",
      of: [
        defineArrayMember({
          type: "object",
          name: "navbarLink",
          fields: [
            defineField({
              type: "string",
              name: "label",
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: "reference",
              name: "link",
              to: { type: "page" },
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
