/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://madiunphotography.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      'https://madiunphotography.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'daily',
      },
      '/portfolio': {
        priority: 0.9,
        changefreq: 'weekly',
      },
      '/services': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/about': {
        priority: 0.7,
        changefreq: 'monthly',
      },
      '/contact': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/book': {
        priority: 0.9,
        changefreq: 'weekly',
      },
      '/pricing': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/reviews': {
        priority: 0.6,
        changefreq: 'weekly',
      },
      '/blog': {
        priority: 0.7,
        changefreq: 'daily',
      },
    }

    const pageConfig = customConfig[path] || {
      priority: 0.5,
      changefreq: 'monthly',
    }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      priority: pageConfig.priority,
      changefreq: pageConfig.changefreq,
    }
  },
}
