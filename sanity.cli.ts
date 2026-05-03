import { defineCliConfig } from "sanity/cli";
export default defineCliConfig({
  api: {
    projectId: "77myuhjy",
    dataset: "production",
  },
  schemaExtraction: {
    path: "sanity.schema.json",
  },
  typegen: {
    path: "./src/**/*.{ts,tsx,js,jsx}",
    schema: "sanity.schema.json",
    generates: "./sanity.types.ts",
    overloadClientMethods: true,
  },
});
