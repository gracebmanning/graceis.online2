import { defineType, defineArrayMember } from "sanity";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        defineArrayMember({
            title: "Block",
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
            ],
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
            ],
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: "URL",
                        name: "link",
                        type: "object",
                        fields: [
                            {
                                title: "URL",
                                name: "href",
                                type: "url",
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: "code",
        }),
        defineArrayMember({
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                },
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                },
                {
                    name: "size",
                    type: "string",
                    title: "Size",
                    options: {
                        list: [
                            { title: "small", value: "small" },
                            { title: "medium", value: "medium" },
                            { title: "large", value: "large" },
                        ],
                        layout: "dropdown",
                        direction: "vertical",
                    },
                },
            ],
        }),
        defineArrayMember({
            name: "videoRow",
            title: "Video Row",
            type: "object",
            fields: [
                {
                    name: "videos",
                    title: "Videos",
                    type: "array",
                    validation: (Rule) => Rule.min(1).max(3),
                    of: [
                        defineArrayMember({
                            name: "video",
                            title: "Video",
                            type: "object",
                            fields: [
                                {
                                    name: "videoSource",
                                    title: "Video Source",
                                    type: "string",
                                    options: {
                                        list: [
                                            { title: "url", value: "url" },
                                            { title: "cloudfront", value: "cloudfront" },
                                        ],
                                        layout: "radio",
                                        direction: "horizontal",
                                    },
                                },
                                {
                                    name: "videoURL",
                                    title: "Video URL",
                                    type: "url",
                                    hidden: ({ parent }) => parent?.videoSource != "url",
                                },
                                {
                                    name: "videoFileName",
                                    title: "Video File Name",
                                    type: "string",
                                    hidden: ({ parent }) => parent?.videoSource != "cloudfront",
                                },
                                {
                                    name: "caption",
                                    title: "Caption",
                                    type: "string",
                                },
                                {
                                    name: "size",
                                    title: "Size",
                                    type: "string",
                                    options: {
                                        list: [
                                            { title: "small", value: "small" },
                                            { title: "medium", value: "medium" },
                                            { title: "large", value: "large" },
                                        ],
                                        layout: "dropdown",
                                    },
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
});
