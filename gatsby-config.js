module.exports = {
  siteMetadata: {
    title: `Galaxy Letter`,
    name: `Galaxy Letter`,
    siteUrl: `https://galaxyletter.com`,
    description: `My Journey Towards Obliterating the Galaxy`,
    hero: {
      heading: `My Journey Towards Obliterating the Galaxy.`,
      maxWidth: 652,
    },
    social: [{
      name: `github`,
      url: `https://github.com/shunkakinoki`,
    }],
  },
  plugins: [{
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};