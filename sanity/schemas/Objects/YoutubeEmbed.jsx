import React from "react";
import { FaYoutube } from "react-icons/fa";
export default {
  type: "object",
  name: "youtube-embed",
  title: "YouTube",
  icon: React.forwardRef((props, ref) => <FaYoutube />),
  fields: [
    {
      type: "string",
      title: "Video ID",
      name: "videoId",
      description: "YouTube movie id, this is 11 characters. They can be found in the URL of the movie",
    },
  ],
  preview: {
    select: {
      id: "videoId",
    },
    prepare({ id }) {
      return {
        title: "Video YouTube",
        subtitle: `ID: ${id}`,
      };
    },
  },
};
