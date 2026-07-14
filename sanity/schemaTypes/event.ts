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
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      description: "A short description",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "date",
      name: "startDate",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "image",
      name: "logo",
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      type: "image",
      name: "cover",
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      type: "pageBuilder",
      name: "sections",
    }),
    defineField({
      type: "seo",
      name: "seo",
      title: "SEO",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/events/${slug?.current || ""}`,
      };
    },
  },
});
