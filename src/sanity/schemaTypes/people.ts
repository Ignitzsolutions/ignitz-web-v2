import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "contentImage" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "expertise", title: "Expertise", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "socialLinks", title: "Social links", type: "array", of: [{ type: "socialLink" }] }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
  ],
});

export const intern = defineType({
  name: "intern",
  title: "Intern",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
    defineField({ name: "cohort", title: "Cohort", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "track", title: "Track", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "contentImage" }),
    defineField({ name: "bio", title: "Short bio", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "projectLinks", title: "Project links", type: "array", of: [{ type: "projectLink" }] }),
    defineField({ name: "mentor", title: "Mentor", type: "reference", to: [{ type: "teamMember" }] }),
    defineField({ name: "visible", title: "Visible", type: "boolean", initialValue: true }),
  ],
});

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "contentImage" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
  ],
});
