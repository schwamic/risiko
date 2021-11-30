export const content = {
  title: 'Distribute mission cards among all players over the web.',
  logo: 'Risk Logo',
  form: {
    input: {
      game: 'Game',
      name: 'Nickname'
    },
    errors: {
      game: ['Game is required'],
      name: ['Name is required', 'The name is already taken']
    }
  },
  buttons: {
    create: 'Create',
    join: 'Join'
  },
  infos: [
    {
      title: 'Notice',
      text: 'This is a private application. It is not a cooperation with the manufacturer of the game Risk.'
    },
    {
      title: 'Privacy',
      text: 'No user-related data is collected and distributed. No analytics or other tracking tools are used either.'
    },
    {
      title: 'What is it?',
      text: 'The purpose is to distribute Risk mission cards to all players over the web. As in real life, no mission card can be distributed twice and is kept secret.'
    },
    {
      title: 'Open Source',
      text: 'This is a very small application based on NodeJS (Fastify, NextJS) and PostgreSQL. The app is hosted on Heroku (Frankfurt). The Code can be found on GitHub.'
    }
  ]
}
