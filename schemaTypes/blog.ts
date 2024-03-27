import { defineField, defineType } from "sanity";

export const blog = defineType({
    name: "blog",
    title: "Blogs",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: 'image'}]
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "string"}]
        },
        {
            name: "sku",
            title: "Sku",
            type: "string",
        },
    ],
})