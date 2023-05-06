import { MdFileDownload } from "react-icons/md";
export default {
    type: "document",
    name: "laws",
    title: "Executive documents",
    icon: MdFileDownload,
    fields: [
        {
            name: "issued_levels",
            type: "string",
            title: "Issued levels",
            options: {
                list: [
                    { name: "ministry_of_education_and_training", value: "Bộ GD&ĐT", title: "Bộ GD&ĐT" },
                    { name: "education_and_training", value: "Sở GD&ĐT", title: "Sở GD&ĐT" },
                    { name: "education_and_training_room", value: "Phòng GD&ĐT", title: "Phòng GD&ĐT" },
                    { name: "other", value: "Khác", title: "Khác" },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Number of symbol",
            name: "number_of_symbol",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Date publish",
            name: "date_publish",
            type: "date",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Description",
            name: "description",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: { source: 'description' },
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
    preview: {
		select: {
			title: "description",
			subtitle: "issued_levels"
		},
    },
};
