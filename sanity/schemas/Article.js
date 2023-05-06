export default {
  type: "document",
  name: "article",
  title: "Article",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: {type: 'category'},
      validation: (Rule) => Rule.required(),
    },
    { type: "image", name: "image", title: "Header image" },
    {
      type: "boolean",
      name: "showTitleImage",
      title: "Preview header image",
      description:
        "Determines whether at the beginning of the article, the title photo should be displayed",
      initialValue: () => true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      type: "body",
      title: "Body",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "datetime",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
};
