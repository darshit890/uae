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
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
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
            type: 'array',
            of: [{ type: 'block'}],
        },
        {
            name: "description1",
            title: "Description1",
            type: 'array',
            of: [{ type: 'block'}],
        },
        {
            name: "description12",
            title: "Description2",
            type: 'array',
            of: [{ type: 'block'}],
        },
        {
            name: "sku",
            title: "Sku",
            type: "string",
        },
    ],
})