import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Briefcase, ArrowRight } from 'lucide-react'

export const AvailabilityBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-12 sm:py-16 px-4 sm:px-6 rounded-2xl shadow-xl animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
          <Briefcase size={16} />
          <span>Available for Work</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
        <p className="text-base sm:text-lg mb-6 text-white/90">
          I'm currently available for freelance projects and full-time opportunities. 
          Let's discuss how I can help bring your ideas to life.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-white text-primary-600 hover:bg-gray-100 group">
              Hire Me <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
