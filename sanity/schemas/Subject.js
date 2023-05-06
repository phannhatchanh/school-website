export default {
  type: "document",
  name: "subject",
  title: "Subject list",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: { source: 'name' },
		},
    {
      title: "Icon",
      name: "icon",
      type: "string"
    },
  ],
  preview: {
		select: {
			title: "name",
			subtitle: "icon"
		},
  },
};
