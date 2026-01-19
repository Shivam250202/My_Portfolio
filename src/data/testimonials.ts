export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Senior Software Engineer',
    company: 'AI4S Solutions',
    content: 'Shivam is an exceptional developer with strong problem-solving skills. His ability to deliver quality code on time while maintaining best practices is impressive. He quickly adapted to our tech stack and contributed significantly to our cloud infrastructure.',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Project Manager',
    company: 'AI4S Solutions',
    content: 'Working with Shivam has been a great experience. He brings innovative solutions to complex problems and maintains excellent communication throughout projects. His DevOps expertise helped us reduce deployment time by 70%.',
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Tech Lead',
    company: 'Tech Path R&D',
    content: 'Shivam demonstrated excellent technical skills and a strong work ethic during his internship. He quickly adapted to our tech stack and delivered high-quality RESTful APIs. His database optimization work improved our application performance significantly.',
  },
  {
    id: '4',
    name: 'Dr. Sunita Singh',
    role: 'Professor & Project Guide',
    company: 'SHEAT College',
    content: 'Shivam was one of my brightest students. His final year project showcased exceptional technical depth and innovation. He has a natural talent for understanding complex systems and implementing elegant solutions.',
  },
]
