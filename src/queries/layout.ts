import { defineQuery } from "groq";

export const LAYOUT_QUERY = defineQuery(
  `*[_type == "siteSettings"][0] {
    siteName,
    navbar {
      ...,
      links[] {
        label,
        "slug": link->slug.current
      }
    },
    footer,
    globalSeo
  }`,
);
