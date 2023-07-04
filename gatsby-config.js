/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SV Events`,
    description: `Your One Stop Solution for all your events!`,
    author: `Parvathesh`,
    siteUrl: `https://svevents.in/`,
    og: {
      url: 'https://svevents.in/',
      type: 'website',
      site_name: 'SV Events',
      title: 'SV Events',
      description: 'Your One Stop Solution for all your events!',
      image: 'https://svevents.in/og-image.jpg',
      locale: 'en_us',
      fb_app_id: 'Your FB_APP_ID',
    },
    twitter: {
      card: 'summary_large_image',
      domain: 'https://svevents.in/',
      url: 'https://svevents.in/',
      title: 'SV Events',
      description: 'Your One Stop Solution for all your events!',
      image: 'https://svevents.in/og-image.jpg',
      label1: 'Design your day and treasure it :)',
      data1: 'Decorations | Catering | Purohith services | Photography | Gifts | DJ/Band | Tents | Services for all occasions :)',
      label2: 'Book Your Event Now!',
      data2: 'https://svevents.in/'
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SV Events`,
        short_name: `SV`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sv.png`,
      },
    },
  ],
}
