import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "~/sanity/schemas";

export default defineConfig({
  name: "youthacks",
  title: "Youthacks",
  projectId: "77myuhjy",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
