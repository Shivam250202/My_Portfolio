import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useState, useEffect } from 'react'
import { personalInfo } from '@/data/personal'
import logo from '@/assets/images/Shivam_Pandey.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg' 
        : 'bg-gradient-to-r from-gray-800 to-gray-700'
    } border-b border-gray-700/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt={personalInfo.name} 
              className="w-10 h-10 rounded-lg object-cover shadow-md group-hover:shadow-lg transition-all group-hover:scale-105"
            />
            <span className="font-bold text-2xl hidden sm:block" style={{ 
              background: 'linear-gradient(90deg, #22c55e 0%, #3b82f6 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
            }}>
              {personalInfo.name.split(' ')[0]}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all font-medium text-sm relative ${
                  location.pathname === link.path
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={toggleTheme} 
              className="ml-2 p-2 rounded-lg hover:bg-white/10 transition-all hover:scale-110 text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/20 bg-gray-800 animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={toggleTheme} 
              className="flex items-center gap-2 w-full px-4 py-2 text-white/90 hover:bg-white/10 rounded-lg transition-colors font-medium"
            >
              {theme === 'light' ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
