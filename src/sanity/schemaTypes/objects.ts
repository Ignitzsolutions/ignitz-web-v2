import { defineField, defineType } from "sanity";

export const contentImage = defineType({
  name: "contentImage",
  title: "Content image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL", type: "url", validation: (rule) => rule.required() }),
  ],
});

export const projectLink = defineType({
  name: "projectLink",
  title: "Project link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL", type: "string", validation: (rule) => rule.required() }),
  ],
});
