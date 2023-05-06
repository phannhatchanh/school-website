import { MdFileDownload } from "react-icons/md";
export default {
  type: "object",
  name: "file-button",
  title: "Download file",
  icon: MdFileDownload,
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
        title: "File",
        name: "file",
        type: "file"
    },
    {
      name: "targetBlank",
      type: "boolean",
      title: "New Tab",
      description: "Open in the new Tab",
      initialValue: () => true,
    },
  ],
};
