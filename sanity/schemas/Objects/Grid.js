import { MdGrid3X3 } from "react-icons/md";

export default {
  title: "Grid",
  name: "grid",
  type: "object",
  icon: MdGrid3X3,
  fields: [
    {
      title: "Elements",
      name: "elements",
      type: "array",
      of: [
        { type: "page-button" },
        { type: "file-button" },
        { type: "image" },
        { type: "tiktok-embed" },
        { type: "youtube-embed" },
      ],
    },
  ],
  preview: {
    select: {
      items: "elements",
    },
    prepare({ items }) {
      return { title: `Grid, ${items ? items?.length : "0"} elements` };
    },
  },
};
