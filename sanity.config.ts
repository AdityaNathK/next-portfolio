import schemas from "@src/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision";
// import { schemaTypes } from "./schemas";

export default defineConfig({
    name: "sanity-next-portfolio",
    title: "sanity-next-portfolio",
    projectId: "6m6bm4nq",
    dataset: "production",
    apiVersion: "2023-06-21",
    basePath: "/admin",

    // plugins: [deskTool(), visionTool()],
    plugins: [deskTool()],

    schema: {
        types: schemas,
    },
});
