import React from "react";
import { FaTiktok } from "react-icons/fa";
export default {
  type: "object",
  name: "tiktok-embed",
  title: "TikTok",
  icon: React.forwardRef((props, ref) => <FaTiktok />),
  fields: [
    {
      type: "string",
      title: "TikTok ID",
      name: "id",
      description: "You can get them to cut them out of URL Tiktok",
    },
  ],
  preview: {
    select: {
      id: "id",
    },
    prepare({ id }) {
      return {
        title: "TikTok",
        subtitle: `ID: ${id}`,
      };
    },
  },
};
