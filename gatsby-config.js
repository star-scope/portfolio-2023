module.exports = {
  siteMetadata: {
    title: `Starscope`,
    description: `Check out my portfolio!`,
    author: `Caleb Faulkner`,
    siteUrl: `https://starscope.design/`,
  },
  plugins: [
    // Gatsby's data processing layer begins with “source” plugins. Here the filesystem plugin is sourcing a directory of images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },

    // The following plugins transform content and data in this site: 
    `gatsby-plugin-image`,  // Optimizes site images
    `gatsby-transformer-sharp`,  // Processes images in GraphQL queries
    `gatsby-plugin-sharp`,  // Provides several image processing functions
    
    // The transition link plugin allows for animated transitions between Gatsby pages
    `gatsby-plugin-transition-link`,
    
    // The manifest plugin allows users to add this site to their home screen on most mobile browsers
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starscope`,
        short_name: `Starscope`,
        start_url: `/`,
        background_color: `#111111`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
