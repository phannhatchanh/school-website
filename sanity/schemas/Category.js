export default {
        title: 'Categories',
        name: 'category',
        type: 'document',
        fields: [
            {
                title: 'Title',
                name: 'title',
                type: 'string',
                validation: (Rule) => Rule.required(),
            },
            {
                title: 'Slug',
                name: 'slug',
                type: 'slug',
                options: {
                    source: 'title',
                    maxLength: 100,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: "string",
                name: "icon",
                title: "Icon",
              },
            {
                title: 'Description',
                name: 'description',
                type: 'text',
            },
            {
                title: 'Parent Categories',
                name: 'parents',
                type: 'array',
                of: [{type: 'reference', to: [{type: 'category'}]}],
            },
            {
                name: 'color',
                title: 'Favorite color',
                type: 'color'
            },
        ],
        preview: {
            select: {title: 'title', media: 'image'},
        },
}