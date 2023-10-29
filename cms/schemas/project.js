export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'raised',
      type: 'number',
      title: 'Raised',
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
