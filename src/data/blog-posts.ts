export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a React project with TypeScript and best practices for type-safe development.',
    content: 'Full article content here...',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    tags: ['React', 'TypeScript', 'Web Development'],
  },
  {
    id: '2',
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A comprehensive guide to creating scalable and secure REST APIs using Node.js and Express.',
    content: 'Full article content here...',
    date: 'Dec 20, 2023',
    readTime: '8 min read',
    tags: ['Node.js', 'API', 'Backend'],
  },
  {
    id: '3',
    title: 'Docker and Kubernetes for Beginners',
    excerpt: 'Understanding containerization and orchestration with practical examples and use cases.',
    content: 'Full article content here...',
    date: 'Nov 10, 2023',
    readTime: '10 min read',
    tags: ['Docker', 'Kubernetes', 'DevOps'],
  },
  {
    id: '4',
    title: 'Modern CSS Techniques',
    excerpt: 'Explore modern CSS features like Grid, Flexbox, and custom properties for better layouts.',
    content: 'Full article content here...',
    date: 'Oct 5, 2023',
    readTime: '6 min read',
    tags: ['CSS', 'Frontend', 'Design'],
  },
  {
    id: '5',
    title: 'Cloud Deployment Strategies',
    excerpt: 'Best practices for deploying applications to cloud platforms like AWS and Google Cloud.',
    content: 'Full article content here...',
    date: 'Sep 18, 2023',
    readTime: '7 min read',
    tags: ['Cloud', 'AWS', 'Deployment'],
  },
  {
    id: '6',
    title: 'Python for Data Processing',
    excerpt: 'Using Python libraries like Pandas and NumPy for efficient data manipulation and analysis.',
    content: 'Full article content here...',
    date: 'Aug 25, 2023',
    readTime: '9 min read',
    tags: ['Python', 'Data Science', 'Pandas'],
  },
]
