import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
            options: {
                dateFormat: "MMMM YYYY",
            },
        }),
        defineField({
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                }),
            ],
        }),
        defineField({
            name: "externalLink",
            title: "External Link",
            type: "object",
            fields: [
                defineField({
                    name: "linkURL",
                    title: "Link URL",
                    type: "url",
                }),
                defineField({
                    name: "linkText",
                    title: "Link Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: { type: "projectTag" } }],
        }),
        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
        }),
    ],

    preview: {
        select: {
            title: "title",
            subtitle: "type",
        },
        prepare(selection) {
            return { ...selection };
        },
    },
});
