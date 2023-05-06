export default {
    type: "document",
    name: "year",
    title: "Year",
    fields: [
      {
        name: "year",
        title: "Year",
        type: "string",
        validation: (Rule) => Rule.required(),
      }
    ],
  };
  