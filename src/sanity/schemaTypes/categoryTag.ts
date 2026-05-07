import { defineField, defineType } from "sanity";

export const categoryTag = defineType({
  name: "categoryTag",
  title: "Category / Tag",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({
      name: "usageType",
      title: "Usage type",
      type: "string",
      options: {
        list: ["AI product", "Incubator", "Hackathon", "Blog", "People", "General"],
      },
      initialValue: "General",
    }),
  ],
});
