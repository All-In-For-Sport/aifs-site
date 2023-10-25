export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
    },
    {
      name: 'donateCryptoLink',
      type: 'url',
      title: 'Donate Crypto Link',
    },
    {
      name: 'donateFiatLink',
      type: 'url',
      title: 'Donate Fiat Link',
    },
    {
      name: 'goal',
      type: 'number',
      title: 'Goal',
    },
    {
      name: 'raised',
      type: 'number',
      title: 'Raised',
    },
    {
      name: 'about',
      type: 'object',
      title: 'About',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },
      ],
    },
    {
      name: 'projectDetails',
      type: 'object',
      title: 'Project Details',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },
        {
          name: 'videoUrl',
          type: 'url',
          title: 'Video URL',
        },
      ],
    },
    {
      name: 'goals',
      type: 'array',
      title: 'Goals',
      of: [
        {
          name: 'goal',
          type: 'object',
          title: 'Goal',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
          ],
        },
      ],
    },
  ],
}
