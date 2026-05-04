import { defineQuery } from "groq";

export const LAYOUT_QUERY = defineQuery(
  `*[_type == "siteSettings"][0] { siteName, footer }`,
);

export const INDEX_QUERY = defineQuery(`*[_type == "siteSettings"][0] {
  indexPage->
}`);

export const PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]`,
);
