import { defineQuery } from "groq";

export const NOT_FOUND_QUERY = defineQuery(
  `*[_type == "notFoundPage"][0]`,
);
