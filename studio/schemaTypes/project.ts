import { defineField, defineType } from "sanity"

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Projektnamn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Unik URL-del)',
      type: 'slug',
      options: { source: 'title' }, 
    }),
    defineField({
      name: 'type',
      title: 'Energityp',
      type: 'string',
      options: {
        list: [
          { title: 'Vindkraft', value: 'Vindkraft' },
          { title: 'Solenergi', value: 'Solenergi' },
          { title: 'Vattenkraft', value: 'Vattenkraft' }
        ],
        layout: 'radio'
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pågående', value: 'ongoing'},
          { title: 'Kommande', value: 'upcoming'},
          { title: 'Avslutade', value: 'completed'}
        ],
        layout: 'radio',
      },
      initialValue: 'ongoing',
    }),
    
    defineField({
      name: 'image',
      title: 'Omslagsbild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      validation: (rule) => rule.required().min(10).error("Minst 10 tecken!")
    }),
  ],
})