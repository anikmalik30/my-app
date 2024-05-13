import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options:{
                source:'title',
                // maxLength:96,    
            },
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'block' },
            ],
        },
        // {
        //     name: 'author',
        //     type: 'reference',
        //     title: 'Author',
        //     to: [{ type: 'author' }],
        // },
        // {
        //     name: 'mainImage',
        //     type: 'image',
        //     title: 'Main image',
        //     options: {
        //         hotspot: true,
        //     },
        // },
        // {
        //     name: 'categories',
        //     type: 'array',
        //     title: 'Categories',
        //     of: [{ type: 'reference', to: [{ type: 'category' }] }],
        // },
        // {
        //     name: 'publishedAt',
        //     type: 'datetime',
        //     title: 'Published at',
        // },
        // {
        //     name: 'body',
        //     type: 'array',
        //     title: 'Body',
        //     of: [
        //         { type: 'block' },
        //         { type: 'image' },
        //         {
        //             type: 'code',
        //             options: {
        //                 withFilename: true,
        //             },
        //         },
        //     ],
        // },
    ],
}