export const projectSchema = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'tag',
      type: 'array',
      title: 'Tag',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
  ],
}
