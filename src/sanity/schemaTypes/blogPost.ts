import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "date", title: "Date", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "coverImage", title: "Cover image", type: "contentImage" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "contentImage" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "categoryTag" }] }] }),
    defineField({
      name: "relatedProducts",
      title: "Related AI products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "aiProduct" }] }],
    }),
    defineField({
      name: "relatedProjects",
      title: "Related incubated projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "incubatedProject" }] }],
    }),
  ],
});
