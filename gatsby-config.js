module.exports = {
  siteMetadata: {
    title: `Blog Template`,
    name: `Blog Template`,
    siteUrl: `https://template.blog.shunkakinoki.com`,
    description: `Blog Template`,
    hero: {
      heading: `Blog Template`,
      maxWidth: 652,
    },
    social: [{
      name: `github`,
      url: `https://github.com/shunkakinoki-blog/template`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134813374-11",
        anonymize: true,
      },
    },
  ],
};
