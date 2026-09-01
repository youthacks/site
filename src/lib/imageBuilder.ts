import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "sanity:client";

const imageBuilder = createImageUrlBuilder(sanityClient);
export default imageBuilder;
