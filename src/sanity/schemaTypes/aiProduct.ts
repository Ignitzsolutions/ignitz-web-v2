import { defineField, defineType } from "sanity";

export const aiProduct = defineType({
  name: "aiProduct",
  title: "AI Product",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Concept", "Incubating", "Internal pilot", "Client pilot", "Live"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "stage",
      title: "Product stage",
      type: "string",
      options: { list: ["Discovery", "Prototype", "Pilot", "Production"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", title: "Short description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "heroImage", title: "Hero image", type: "contentImage" }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "capabilities", title: "Capabilities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "targetUsers", title: "Target users", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "demoCta", title: "Demo CTA", type: "string" }),
    defineField({
      name: "relatedBlogPosts",
      title: "Related blog posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
    }),
    defineField({
      name: "relatedIncubatedProject",
      title: "Related incubated project",
      type: "reference",
      to: [{ type: "incubatedProject" }],
    }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "categoryTag" }] }] }),
  ],
});
