import { MdOutlineNavigation } from "react-icons/md";
export default {
  type: "object",
  name: "school-year",
  title: "School year",
  icon: MdOutlineNavigation,
  fields: [
    {
      title: "School year",
      name: "year",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
