import { defineField, defineType } from "sanity";

export const incubatedProject = defineType({
  name: "incubatedProject",
  title: "Incubated Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "stage", title: "Stage", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "owner", title: "Owner or team", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "prototypeNotes", title: "Prototype notes", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "screenshots", title: "Screenshots", type: "array", of: [{ type: "contentImage" }] }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "outcomes", title: "Outcomes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "linkedProduct", title: "Linked AI product", type: "reference", to: [{ type: "aiProduct" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "categoryTag" }] }] }),
  ],
});
