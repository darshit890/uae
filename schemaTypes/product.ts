import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
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
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "string"}]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: "array",
            of: [{ type: "string"}]
        },
        {
            name: "colors",
            title: "Colors",
            type: "array",
            of: [{ type: "string"}]
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
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "discount",
            title: "Discount",
            type: "number",
        },
        {
            name: "offer",
            title: "Offer",
            type: "number",
        },
        {
            name: "review",
            title: "Review",
            type: "number",
        },
        {
            name: "shipping",
            title: "Shipping",
            type: "array",
            of: [{ type: "string"}]
        },
        {
            name: "rating",
            title: "Rating",
            type: "array",
            of: [{ type: "string"}]
        },
        {
            title: "Video file",
            name: "video",
            type: "mux.video"
          },
    ],
})