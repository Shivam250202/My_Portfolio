import { personalInfo } from '@/data/personal'
import { skills } from '@/data/skills'
import { Card } from '@/components/ui/Card'
import { Mail, MapPin, Phone, User, Sparkles } from 'lucide-react'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export const AboutPage = () => {
  const skillsSection = useScrollReveal()
  const servicesSection = useScrollReveal()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Get to know more about my background and expertise</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 scroll-reveal-left scroll-reveal-visible">
        <Card className="lg:col-span-2 hover-lift will-animate animate-slide-in-left">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-primary-600 dark:text-primary-500" size={24} />
            <h2 className="text-2xl font-bold">Bio</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{personalInfo.bio}</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group">
              <Mail size={20} className="flex-shrink-0 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-500 transition break-all">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group">
              <Phone size={20} className="flex-shrink-0 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-600 dark:hover:text-primary-500 transition">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="flex-shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </Card>

        <Card className="hover-lift will-animate animate-slide-in-right">
          <h2 className="text-2xl font-bold mb-4">Quick Info</h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Name</p>
              <p>{personalInfo.name}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Role</p>
              <p>{personalInfo.title}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Location</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </Card>
      </div>

      <div 
        ref={skillsSection.ref}
        className={`scroll-reveal ${skillsSection.isVisible ? 'scroll-reveal-visible' : ''}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-primary-600 dark:text-primary-500" size={28} />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {skills.map((skill, idx) => (
          <Card key={skill.category} className={`hover-lift will-animate animate-scale-in stagger-${idx + 1}`}>
            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span key={item} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm hover:scale-105 transition-transform">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
        </div>
      </div>

      {/* Services Section */}
      <div 
        ref={servicesSection.ref}
        className={`mt-16 scroll-reveal-right ${servicesSection.isVisible ? 'scroll-reveal-visible' : ''}`}
      >
        <ServicesSection />
      </div>
    </div>
  )
}
