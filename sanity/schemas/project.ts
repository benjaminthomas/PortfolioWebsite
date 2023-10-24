import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "tag",
      type: "array",
      title: "Tag",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "link",
      type: "string",
      title: "Link",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
  ],
});
