import { defineQuery } from "groq";

export const HOMEHERO_BUTTON_QUERY = defineQuery(
  `*[_type == "page" && _id == $id][0] {slug}`,
);
