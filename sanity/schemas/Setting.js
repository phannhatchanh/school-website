export default {
    type: "document",
    name: "setting",
    title: "Site Settings",
    fieldsets: [
      {
        title: 'Information',
        name: 'information',
        options: {
          columns: 1,
        },
      },
      {
        title: 'Footer',
        name: 'footer',
        options: {
          columns: 1,
        },
      },
    ],
    fields: [
      { type: "image", name: "banner", title: "Banner image" },
      {
        title: "School name",
        name: "name",
        fieldset: 'information',
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        title: "District",
        name: "district",
        fieldset: 'information',
        type: "string",
      },
      {
        title: "Province",
        name: "province",
        fieldset: 'information',
        type: "string",
      },
      {
        title: "Address",
        name: "address",
        fieldset: 'information',
        type: "string",
      },
      {
        title: "Email",
        name: "email",
        fieldset: 'information',
        type: "string",
      },
      {
        title: "Phone",
        name: "phone",
        fieldset: 'information',
        type: "string",
      },
      {
        title: "Copyright",
        name: "copyright",
        fieldset: 'footer',
        type: "string",
      },
    ],
  };
  