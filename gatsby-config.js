module.exports = {
  siteMetadata: {
    title: `My 1st year`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/uploads`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp-exif`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peanut`,
        short_name: `Peanut`,
        start_url: `/`,
        background_color: `#b06d0e`,
        theme_color: `#b06d0e`,
        display: `minimal-ui`,
        icon: `src/images/peanut.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
