export interface EssayMeta {
  slug: string
  title: string
  category: string
  readTime: string
  date: string
  lede: string
  featured?: boolean
  published: boolean
}

export const essays: EssayMeta[] = [
  {
    slug: 'adaptation-ai',
    title: 'Adaptation in the Age of AI',
    category: 'AI & Futures',
    readTime: '11 min',
    date: '2026-01-15',
    lede: 'When models update faster than institutions, humans face a fundamental choice: freeze, outsource, or adapt.',
    featured: true,
    published: true,
  },
  {
    slug: 'manifesto',
    title: 'The Homo Adapticus Manifesto',
    category: 'Manifesto',
    readTime: '9 min',
    date: '2026-01-01',
    lede: 'Adaptation is not a last resort. It is a design principle for a life.',
    published: true,
  },
]

export function getPublished(): EssayMeta[] {
  return essays
    .filter((e) => e.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeatured(): EssayMeta {
  return essays.find((e) => e.featured && e.published) ?? getPublished()[0]
}
