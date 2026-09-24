export interface Technology {
  name: string
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Data & AI' | 'Cloud & Infra'
}

export const technologies: Technology[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Data & AI' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'AI / LLMs', category: 'Data & AI' },
  { name: 'REST & GraphQL APIs', category: 'Backend' },
  { name: 'Docker', category: 'Cloud & Infra' },
  { name: 'Cloud Infrastructure', category: 'Cloud & Infra' },
]

export const techCategories = [
  'Frontend',
  'Backend',
  'Mobile',
  'Data & AI',
  'Cloud & Infra',
] as const
