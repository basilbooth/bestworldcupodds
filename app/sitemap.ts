import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestworldcupodds.com'
  
  // Team pages
  const teams = [
    'usa', 'mexico', 'argentina', 'brazil', 'england', 
    'france', 'spain', 'germany', 'portugal', 'netherlands'
  ]
  
  const teamPages = teams.map(team => ({
    url: `${baseUrl}/teams/${team}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))
  
  // Guide pages
  const guides = ['how-to-bet', 'best-betting-sites', 'top-scorer-betting']
  
  const guidePages = guides.map(guide => ({
    url: `${baseUrl}/guides/${guide}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...teamPages,
    ...guidePages,
  ]
}
