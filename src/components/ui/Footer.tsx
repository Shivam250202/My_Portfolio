import { Github, Linkedin, Mail, Heart, ArrowUp, Home, User, Briefcase, BookOpen, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo } from '@/data/personal'
import { useState, useEffect } from 'react'
import logo from '@/assets/images/Shivam_Pandey.png'

export const Footer = () => {
  const year = new Date().getFullYear()
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/blog', label: 'Blog', icon: BookOpen },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt={personalInfo.name} 
                className="w-14 h-14 rounded-lg object-cover shadow-lg"
              />
              <span className="font-bold text-xl text-white">{personalInfo.name.split(' ')[0]}</span>
            </div>
            <p className="text-sm leading-relaxed">
              {personalInfo.title}. Building digital experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              {personalInfo.social.github && (
                <a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => {
                const Icon = link.icon
                return (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-sm hover:text-primary-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <Icon size={16} className="group-hover:scale-110 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                  <Phone size={16} className="group-hover:scale-110 transition-transform" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-gray-400 inline-flex items-center gap-2">
                <MapPin size={16} />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {year} {personalInfo.name}. Made with <Heart size={14} className="inline text-red-500" /> in India
          </p>
          <p className="text-sm text-gray-400">
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:scale-110 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}
