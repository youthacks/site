import { defineType } from "sanity";
import hero from "./hero";
import homeHero from "./homeHero";

const pageBuilder = defineType({
  type: "array",
  name: "pageBuilder",
  of: [{ type: "hero" }, { type: "homeHero" }],
});

export default [hero, homeHero, pageBuilder];
