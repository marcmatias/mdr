module.exports = {
  siteMetadata: {
    title: `MÚSICA É DA RUA`,
    descriptionTitle: `Projeto Música é da Rua`,
    descriptionText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.`,

    papoTitle: `Papo de Rua`,
    papoDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.`,
    siteUrl: "https://priceless-leakey-c06026.netlify.app"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    `gatsby-transformer-remark`,
  ],
};
