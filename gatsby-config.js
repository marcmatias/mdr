module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Testando Descrição"
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'videos',
            table: 'https://www.notion.so/259c29bf6fb048f2a211fa43c34274b6?v=473323c40d76475a8bbe32c6e58e2b7a',
            cacheType: 'text'
          }
        ]
      }
    }
  ],
};