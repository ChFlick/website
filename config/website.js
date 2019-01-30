const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Chrstoph Flick - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Christoph Flick', // Alternative Site title for SEO
  siteTitleShort: 'Flick', // short_name for manifest
  siteHeadline: 'Software Enigneer Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://christophflick.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription:
    'This is the portfolio and developer page of Christoph Flick, a german software engineer and current Masters student in Digital Transformation.',
  author: 'Christoph Flick', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
