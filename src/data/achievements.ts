export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: 'Award' | 'Hackathon' | 'Open Source' | 'Recognition'
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Final Year Project Award',
    description: 'Received best project award for developing an AI-powered web application during B.Tech final year',
    date: 'August 2022',
    category: 'Award',
  },
  {
    id: '2',
    title: 'Open Source Contributor - 50+ Contributions',
    description: 'Active contributor to Django, React, and DevOps projects on GitHub with 50+ merged pull requests',
    date: '2023-2024',
    category: 'Open Source',
  },
  {
    id: '3',
    title: 'Smart India Hackathon Finalist',
    description: 'Reached national finals by developing a healthcare management system',
    date: 'March 2022',
    category: 'Hackathon',
  },
  {
    id: '4',
    title: 'Performance Excellence Award',
    description: 'Recognized for outstanding performance and delivering 5 projects ahead of schedule at AI4S Solutions',
    date: 'December 2024',
    category: 'Recognition',
  },
  {
    id: '5',
    title: 'Tech Blog - 10K+ Readers',
    description: 'Published 15+ technical articles on Django and DevOps reaching 10,000+ developers',
    date: '2023-Present',
    category: 'Recognition',
  },
  {
    id: '6',
    title: 'College Coding Competition Winner',
    description: 'Won first prize in inter-college coding competition with 200+ participants',
    date: 'January 2021',
    category: 'Award',
  },
]
