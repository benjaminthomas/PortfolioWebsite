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
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "HTML", value: "html" },
              { title: "SCSS", value: "scss" },
              { title: "MVC", value: "mvc" },
              { title: "JavaScript", value: "javascript" },
              { title: "Wordpress", value: "wordpress" },
              { title: "Design System", value: "designsystem" },
              { title: "Kentico", value: "kentico" },
              { title: "Figma", value: "figma" },
              { title: "Sketch", value: "sketch" },
              { title: "TailwindCSS", value: "tailwindcss" },
              { title: "REACT", value: "react" },
              { title: "Vitejs", value: "vitejs" },
              { title: "Threejs", value: "threejs" },
              { title: "Framer motion", value: "framermotion" },
              { title: "NextJs", value: "nextjs" },
              { title: "Sanity Studio", value: "sanitystudio" },
            ],
          },
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
