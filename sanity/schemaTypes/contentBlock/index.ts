import {
  DEFAULT_ANNOTATIONS,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";
import galleryBlock from "./galleryBlock";
import sponsorGridBlock from "./sponsorGridBlock";

const contentBlock = defineType({
  type: "array",
  name: "contentBlock",
  validation: (rule) => rule.required(),
  of: [
    defineArrayMember({
      type: "block",
      marks: {
        annotations: [
          ...DEFAULT_ANNOTATIONS,
          {
            name: "internalLink",
            type: "object",
            title: "Internal Link",
            fields: [
              defineField({
                name: "reference",
                type: "reference",
                to: [{ type: "page" }],
              }),
            ],
          },
        ],
      },
      lists: [],
      styles: [
        { title: "Heading", value: "h2" },
        { title: "Script", value: "script" },
      ],
    }),
    { type: "galleryBlock" },
    { type: "sponsorGridBlock" },
  ],
});

export default [galleryBlock, sponsorGridBlock, contentBlock];
