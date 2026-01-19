import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Mail, Code2, Rocket } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { Button } from '@/components/ui/Button'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { AvailabilityBanner } from '@/components/sections/AvailabilityBanner'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export const HomePage = () => {
  const testimonials = useScrollReveal()
  const achievements = useScrollReveal()
  const availability = useScrollReveal()

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal-left scroll-reveal-visible">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                  <Code2 size={16} />
                  <span>Full Stack Developer</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-primary-600 dark:text-primary-500">{personalInfo.name}</span>
                </h1>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 stagger-1">
                {personalInfo.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed stagger-2">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4 stagger-3">
                <Link to="/projects">
                  <Button className="group">
                    View Projects 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="group">
                    <Rocket className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-4 stagger-4">
                {personalInfo.social.github && (
                  <a 
                    href={personalInfo.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-110 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a 
                    href={personalInfo.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center scroll-reveal-right scroll-reveal-visible">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 animate-gradient flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl hover:scale-105 transition-transform duration-500">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div 
          ref={testimonials.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${testimonials.isVisible ? 'scroll-reveal-visible' : ''}`}
        >
          <TestimonialsSection />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div 
          ref={achievements.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal-left ${achievements.isVisible ? 'scroll-reveal-visible' : ''}`}
        >
          <AchievementsSection />
        </div>
      </section>

      {/* Availability Banner */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div 
          ref={availability.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal-right ${availability.isVisible ? 'scroll-reveal-visible' : ''}`}
        >
          <AvailabilityBanner />
        </div>
      </section>
    </>
  )
}
