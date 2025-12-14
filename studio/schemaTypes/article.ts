import { defineField, defineType } from "sanity"

export default defineType({
    name: "article",
    title: "Nyheter",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Rubrik",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Publicerad datum",
            type: "datetime",
            initialValue: () => new Date().toISOString(), // Dagens datum sätts automatiskt här, hmm
        }),
        defineField({
            name: "image",
            title: "Bild",
            type: "image",
            options: { hotspot: true }, // En smart funktion som gör att jag kan placera en fokuspunkt på bilder som alltid visas oavsett skärmstorlek. 
        }),
        defineField({
            name: "content",
            title: "Text",
            type: "text",
        }),
    ],

})