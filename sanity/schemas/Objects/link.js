import { BiLinkExternal } from "react-icons/bi";

export default {
  name: "link",
  type: "object",
  title: "Link",
  icon: BiLinkExternal,
  fields: [
    {
      name: "href",
      type: "url",
      title: "URL",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "targetBlank",
      type: "boolean",
      title: "New Tab",
      description: "Open the link in the new Tab",
    },
  ],
};
