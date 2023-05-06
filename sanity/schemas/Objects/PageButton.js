import { MdOutlinePageview } from "react-icons/md";
export default {
  type: "object",
  name: "page-button",
  title: "Page reference",
  icon: MdOutlinePageview,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Inside",
      name: "internal",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: () => true,
    },
    {
      title: "Reference",
      name: "reference",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.internal == false,
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      hidden: ({ parent }) => parent?.internal == true,
    },
    {
      name: "targetBlank",
      type: "boolean",
      title: "New Tab",
      description: "Open in the new Tab",
      initialValue: () => false,
    },
  ],
};
