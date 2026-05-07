import { defineField, defineType } from "sanity";

export const hackathon = defineType({
  name: "hackathon",
  title: "Hackathon",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (rule) => rule.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Draft", "Planning", "Open", "Completed"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "theme", title: "Theme", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "participants", title: "Participants", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "projectsProduced", title: "Projects produced", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "winners", title: "Winners", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "contentImage" }] }),
    defineField({ name: "registrationCta", title: "Registration/contact CTA", type: "string" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "categoryTag" }] }] }),
  ],
});
