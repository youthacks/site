import { defineQuery } from "groq";

export const INDEX_QUERY = defineQuery(`*[_type == "siteSettings"][0] {
  indexPage->
}`);

export const PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]`,
);

export const EVENT_PAGE_QUERY = defineQuery(
  `*[_type == "event" && slug.current == $slug][0]`,
);

export const SPONSORS_QUERY = defineQuery(
  `*[_type == "sponsor"] | order(lower(title) asc)`,
);

export const EVENTS_QUERY = defineQuery(
  `*[_type == "event"] | order(startDate desc)`,
);
