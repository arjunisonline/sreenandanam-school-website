import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sreenandanam.edu'

  const routes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/facilities',
    '/gallery',
    '/news',
    '/careers',
    '/contact',
    '/privacy',
    '/terms'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' || route === '/news' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/contact' || route === '/admissions' ? 0.8 : 0.5,
  }))
}
