export default {
  type: "document",
  name: "navigation",
  title: "Navigation",
  __experimental_actions: ['create', "update", 'delete', "publish"], //remove this line to create new navigation, if previous doesnt exist
  fields: [
    {
      title: "Menu",
      name: "menu",
      type: "array",
      of: [{type: "navigation-category"}],
    },
    {
      title: "Social Media",
      name: "socials",
      type: "array",
      of: [
        {
          title: "Social media element",
          type: "object",
          name: "social-item",
          fields: [
            {
              type: "string",
              name: "icon",
              title: "Icon",
            },
            {
              type: "string",
              name: "url",
              title: "URL",
            },
          ],
        },
      ],
    },
  ],
};
