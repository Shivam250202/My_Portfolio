import { Code, Database, Cloud, Smartphone, Globe, Wrench, LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  technologies: string[]
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'Building complete web applications from frontend to backend with modern technologies.',
    icon: Code,
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Creating robust and scalable REST APIs and server-side applications.',
    icon: Database,
    technologies: ['Python', 'Django', 'PostgreSQL', 'SAP CAPM'],
  },
  {
    id: '3',
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on cloud platforms with CI/CD pipelines.',
    icon: Cloud,
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    id: '4',
    title: 'Responsive Web Design',
    description: 'Creating beautiful, mobile-friendly websites that work on all devices.',
    icon: Smartphone,
    technologies: ['HTML', 'CSS', 'Tailwind', 'Responsive Design'],
  },
  {
    id: '5',
    title: 'API Integration',
    description: 'Integrating third-party APIs and services into your applications.',
    icon: Globe,
    technologies: ['REST', 'GraphQL', 'Webhooks', 'OAuth'],
  },
  {
    id: '6',
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, bug fixes, and feature enhancements for existing projects.',
    icon: Wrench,
    technologies: ['Debugging', 'Optimization', 'Updates', 'Support'],
  },
]
