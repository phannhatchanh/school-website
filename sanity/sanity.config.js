import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { table } from '@sanity/table';
import { colorInput } from "@sanity/color-input";
import { deskTool } from "sanity/desk";
import deskStructure from "./desk-structure";
import schemaTypes from "./schemas/schema";

export default defineConfig({
  name: "PTDTNT-THCS-CANG-LONG",
  projectId: "vzlac2zd",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    media(),
    table(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});