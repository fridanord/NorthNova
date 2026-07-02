export default {
  name: 'hero',
  title: 'Hero Sektion',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    },
    {
      name: 'videoBg',
      title: 'Bakgrundsvideo',
      type: 'file',
      options: {
        accept: 'video/mp4'
      }
    }
  ]
}