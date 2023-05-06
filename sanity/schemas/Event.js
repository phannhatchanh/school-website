export default {
  type: "document",
  name: "event",
  title: "Event",
  fieldsets: [
    {
      title: 'Date Time',
      name: 'Datetime',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      name: "startDate",
      title: "Start Date",
      fieldset: 'Datetime',
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      fieldset: 'Datetime',
      type: "date",
      validation: (Rule) => Rule.required(),
    },
  ],
};
