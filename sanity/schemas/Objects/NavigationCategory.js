import { MdOutlineNavigation } from "react-icons/md";
export default {
  type: "object",
  name: "navigation-category",
  title: "Navigation category",
  icon: MdOutlineNavigation,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Path",
      name: "path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((path) => {
          const regex = RegExp("[a-z0-9-]+");
          if (regex.exec(path)[0] == path) return true;
          else return "Incorrect path";
        }),
    },
    {
      title: "Icon",
      name: "icon",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "icon",
    },
  },
};
