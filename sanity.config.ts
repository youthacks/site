import { defineConfig } from "sanity";
import {
  ListItemBuilder,
  structureTool,
  type StructureBuilder,
} from "sanity/structure";
// import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "~/sanity/schemas";

const notSingleton = (listItem: ListItemBuilder) => {
  return !["siteSettings"].includes(listItem.getId()!);
};
const structure = (S: StructureBuilder) => {
  return S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(notSingleton),
      S.divider(),

      S.listItem()
        .id("siteSettings")
        .title("Site settings")
        .child(
          S.editor()
            .id("siteSettingsChild")
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),
    ]);
};

export default defineConfig({
  name: "youthacks",
  title: "Youthacks",
  projectId: "77myuhjy",
  dataset: "production",
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
