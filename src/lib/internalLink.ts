import { defineQuery } from "groq";
import { sanityClient } from "sanity:client";

const INTERNAL_LINK_QUERY = defineQuery(
  `*[_type == "page" && _id == $id][0] { slug }`,
);

export default async function resolveInternalLink(
  ref: { _ref: string } | null | undefined,
) {
  if (!ref) return "/";
  console.log(ref);

  const result = await sanityClient.fetch(INTERNAL_LINK_QUERY, {
    id: ref._ref,
  });
  if (!result?.slug?.current) return "/";

  return `/${result.slug.current}`;
}
