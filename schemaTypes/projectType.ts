import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'project_name',
      type: 'string',
      description: 'Name of the project',
    }),
    defineField({
      name: 'short_description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'For text on project cards. Limit 160 characters',
    }),
    defineField({
      name: 'long_description',
      type: 'array',
      of: [{type: 'block'}],
      description:
        'Brief summary of project. Team? Roles? Timeframe? Design tools? Mention responsive mobile first approach.',
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Cover image for project',
    }),
    defineField({
      name: 'live_link',
      type: 'url',
      description: 'Link to live site',
    }),
    defineField({
      name: 'github_link',
      type: 'url',
      description: 'Link to github repo',
    }),
  ],
})
