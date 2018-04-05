module.exports = {
  pathPrefix: `/giphy-api`,
  siteMetadata: {
    title: 'Giffer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        pathToTheme: 'src/themes/default',
      },
    }
  ],
}
