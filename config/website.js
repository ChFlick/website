var Color = require('color');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Christoph Flick - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Christoph Flick', // Alternative Site title for SEO
  siteTitleShort: 'CFlick', // short_name for manifest
  siteHeadline: 'Software Engineer Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://christophflick.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription:
    'This is the portfolio and developer page of Christoph Flick, a german software engineer and current master\'s degree student of Digital Transformation.',
  author: 'Christoph Flick', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: Color('#5CDB95').grayscale().hex(),
  backgroundColor: '#5CDB95',
}
