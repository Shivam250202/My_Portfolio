export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  avatar: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    portfolio?: string
  }
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  grade?: string
  coursework?: string[]
  projects?: string[]
}

export interface Skill {
  category: string
  items: string[]
  level?: 'Beginner' | 'Intermediate' | 'Expert'
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface Certification {
  id: string
  name: string
  status: 'In Progress' | 'Planned' | 'Completed'
  date?: string
  link?: string
}
