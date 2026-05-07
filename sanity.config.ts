import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId, studioBasePath } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "ignitz",
  title: "Ignitz Content Studio",
  projectId,
  dataset,
  basePath: studioBasePath,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
