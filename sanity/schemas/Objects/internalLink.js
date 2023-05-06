import { BiLink } from "react-icons/bi";

export default {
  title: "Link Internal",
  name: "internal-link",
  type: "object",
  icon: BiLink,
  fields: [
    {
      title: "Reference",
      name: "reference",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
