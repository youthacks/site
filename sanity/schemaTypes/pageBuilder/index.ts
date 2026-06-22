import { defineType } from "sanity";
import hero from "./hero";
import homeHero from "./homeHero";
import content from "./content";
import homeMission from "./homeMission";
import homeImpact from "./homeImpact";
import homeEvents from "./homeEvents";
import homeContent from "./homeContent";
import events from "./events";

const pageBuilder = defineType({
  type: "array",
  name: "pageBuilder",
  of: [
    { type: "hero" },
    { type: "events" },
    { type: "content" },
    { type: "homeHero" },
    { type: "homeMission" },
    { type: "homeImpact" },
    { type: "homeEvents" },
    { type: "homeContent" },
  ],
});

export default [
  hero,
  events,
  content,
  homeHero,
  homeMission,
  homeImpact,
  homeEvents,
  homeContent,
  pageBuilder,
];
