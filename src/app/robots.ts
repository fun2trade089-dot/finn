import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXTAUTH_URL || 'https://finnbase.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/api/', '/budget/', '/market/', '/calculators/', '/finscore/', '/news/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
