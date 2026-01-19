import { projects } from '@/data/projects'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Github, ExternalLink, Star } from 'lucide-react'

export const ProjectsPage = () => {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">A collection of my recent work and side projects</p>
      </div>
      
      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6 animate-slide-in-left">
            <Star className="text-yellow-500 animate-pulse-slow" size={24} />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => (
              <Card key={project.id} className={`flex flex-col hover-lift will-animate animate-slide-up stagger-${idx + 1}`}>
                <div className="h-40 sm:h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold overflow-hidden group">
                  <span className="group-hover:scale-110 transition-transform duration-300">{project.title[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 6).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="flex items-center justify-center gap-2 w-full group">
                        <Github size={16} className="group-hover:rotate-12 transition-transform" /> Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="flex items-center justify-center gap-2 w-full group">
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" /> Demo
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 animate-slide-in-left">Other Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <Card key={project.id} className={`flex flex-col hover-lift will-animate animate-scale-in stagger-${idx + 1}`}>
                <div className="h-32 sm:h-40 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg mb-4 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold overflow-hidden group">
                  <span className="group-hover:scale-110 transition-transform duration-300">{project.title[0]}</span>
                </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="flex items-center justify-center gap-2 w-full">
                        <Github size={14} /> Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="flex items-center justify-center gap-2 w-full">
                        <ExternalLink size={14} /> Demo
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
