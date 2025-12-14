import { defineField, defineType } from "sanity"

export default defineType({
    name: "job",
    title: "Jobbannonser",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Tjänst",
            type: "string",
            validation: (rule) => rule.required().max(50).warning("Max 50 tecken"),
        }),
        defineField({
            name: "location",
            title: "Plats",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Om tjänsten",
            type: "text",
        }),
        defineField({
            name: "email",
            title: "Kontakt-mail",
            type: "string",
        }),
        defineField({
            name: "deadline",
            title: "Sista ansökningsdag",
            type: "date",
        })
    ],

})