import { LinkIcon } from '@sanity/icons/Link'
import {
  ALL_FIELDS_GROUP,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export default defineType({
  type: "object",
  name: "footer",
  groups: [
    { name: "sitemap" },
    { name: "socials" },
    { name: "contact" },
    { name: "outro" },
    { ...ALL_FIELDS_GROUP, hidden: true },
  ],

  fields: [
    defineField({
      type: "string",
      name: "sitemapTitle",
      placeholder: "This site",
      validation: (rule) => rule.required(),
      group: "sitemap",
    }),
    defineField({
      type: "array",
      name: "sitemap",
      of: [
        defineArrayMember({
          type: "object",
          name: "footerLink",
          icon: LinkIcon,
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
      group: "sitemap",
    }),

    defineField({
      type: "string",
      name: "socialsTitle",
      placeholder: "Social media",
      validation: (rule) => rule.required(),
      group: "socials",
    }),
    defineField({
      type: "array",
      name: "socials",
      of: [
        defineArrayMember({
          type: "url",
          placeholder: "https://www.instagram.com/youthacks",
          validation: (rule) => rule.required(),
        }),
      ],
      group: "socials",
    }),

    defineField({
      type: "string",
      name: "contactTitle",
      placeholder: "Contact us",
      validation: (rule) => rule.required(),
      group: "contact",
    }),
    defineField({
      type: "array",
      name: "contact",
      of: [
        defineArrayMember({
          type: "object",
          name: "footerContact",
          fields: [
            defineField({
              type: "string",
              name: "label",
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: "email",
              name: "email",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      group: "contact",
    }),

    defineField({
      type: "image",
      name: "logo",
      validation: (rule) => rule.required(),
      group: "outro",
    }),
    defineField({
      type: "string",
      name: "tagline",
      placeholder: "We are makers.",
      validation: (rule) => rule.required(),
      group: "outro",
    }),
    defineField({
      type: "array",
      name: "copyright",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            // decorators: [{ title: "Strong", value: "strong" }],
            // annotations: [],
          },
          lists: [],
          styles: [],
        }),
      ],
      group: "outro",
    }),
  ],

  // IMPORTANT: fields not assigned to a group will not appear in UI
});
