import { BiHorizontalCenter } from "react-icons/bi";
import React from "react";
import internalLink from "./internalLink";
import link from "./link";

export default {
  title: "Body",
  name: "body",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [internalLink, link],
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Center",
            value: "centered",
            icon: BiHorizontalCenter,
            component: props=> <div style={{ textAlign: 'center' }}>{props.children}</div>
          },
        ],
      },
    },
    { type: "image" },
    { type: "page-button" },
    { type: "file-button" },
    { type: "grid" },
    { type: "table" },
    { type: "tiktok-embed" },
    { type: "youtube-embed" },
  ],
};
