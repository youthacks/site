import {ThLargeIcon} from '@sanity/icons/ThLarge'
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "sponsorGridBlock",
  icon: ThLargeIcon,
  fields: [
    defineField({
      type: "array",
      name: "pick",
      description: "If blank, all sponsors will be displayed",
      of: [
        defineArrayMember({
          type: "reference",
          validation: (rule) => rule.required(),
          to: { type: "sponsor" },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      pick: "pick",
    },
    prepare({ pick }) {
      return {
        title:
          pick && pick.length > 0 ? `${pick.length} sponsors` : "All sponsors",
        subtitle: "Sponsor Grid",
      };
    },
  },
});
