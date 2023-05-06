import { MdOutlinePageview } from "react-icons/md";
export default {
  type: "document",
  name: "page",
  title: "Page",
  icon: MdOutlinePageview,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Path",
      description: "Example: /school/teachers",
      name: "path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((path) => {
          const regex = RegExp("\/[a-z0-9-]*[\/a-z0-9-]*(?<!\/)");
          if (regex.exec(path)[0] == path) return true;
          else return "Incorrect path";
        }),
    },
    {
      title: "Body",
      name: "body",
      type: "body",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "path",
    },
  },
};
