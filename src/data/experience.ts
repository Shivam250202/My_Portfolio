import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'AI4S Solutions Private Limited',
    position: 'SAP CAPM Developer | Cloud & DevOps Engineer',
    duration: 'July 2025 – Present',
    description: 'Leading backend development and cloud infrastructure initiatives for enterprise applications.',
    technologies: ['SAP CAPM', 'Docker', 'CI/CD', 'Cloud Deployment', 'DevOps'],
    achievements: [
      'Developed and optimized 15+ backend services using SAP CAPM, improving API response time by 40%',
      'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      'Containerized 10+ applications using Docker, achieving 99.9% uptime',
      'Collaborated with cross-functional teams to improve application stability by 35%',
      'Automated cloud deployment workflows, reducing manual errors by 60%'
    ]
  },
  {
    id: '2',
    company: 'Tech Path Research and Development',
    position: 'Software Development Intern (Python Developer)',
    duration: 'Oct 2022 – Dec 2022',
    description: 'Contributed to backend development and API design for multiple client projects.',
    technologies: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Authentication'],
    achievements: [
      'Built 20+ RESTful API endpoints following clean architecture principles',
      'Implemented JWT-based authentication system securing 5000+ user accounts',
      'Optimized database queries reducing load time by 50%',
      'Designed normalized database schemas for 3 major projects',
      'Collaborated with frontend team to integrate APIs seamlessly'
    ]
  },
]
