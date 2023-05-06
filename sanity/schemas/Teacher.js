export default {
  type: "document",
  name: "teacher",
  title: "Teacher",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Full name",
      validation: (Rule) => Rule.required(),
    },
    { type: "image", name: "avatar", title: "Avatar" },
    {
      title: "Email address",
      name: "email",
      type: "string",
    },
    {
      title: "Phone number",
      name: "phone",
      type: "string",
    },
    {
      title: "Bio",
      name: "bio",
      type: "text",
    },
  ],
};
