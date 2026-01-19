import { useState, FormEvent } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react'
import { personalInfo } from '@/data/personal'

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Let's connect and discuss your next project</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
        <Card className="animate-slide-in-left">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 outline-none transition resize-none"
                placeholder="Your message..."
              />
            </div>
            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-sm animate-fade-in">✓ Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm animate-fade-in">✗ Failed to send message. Please try again.</p>
            )}
            <Button type="submit" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </Card>

        <div className="space-y-4 sm:space-y-6 animate-slide-in-right order-first lg:order-last">
          <Card className="hover-lift will-animate">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Mail className="text-primary-600 dark:text-primary-500 flex-shrink-0" size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-sm sm:text-base">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition break-all text-sm sm:text-base">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </Card>
          <Card className="hover-lift will-animate stagger-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Phone className="text-primary-600 dark:text-primary-500 flex-shrink-0" size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-sm sm:text-base">Phone</h3>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition text-sm sm:text-base">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </Card>
          <Card className="hover-lift will-animate stagger-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <MapPin className="text-primary-600 dark:text-primary-500 flex-shrink-0" size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-sm sm:text-base">Location</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{personalInfo.location}</p>
              </div>
            </div>
          </Card>
          <Card className="hover-lift will-animate stagger-3">
            <h3 className="font-bold mb-4 text-sm sm:text-base">Connect With Me</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {personalInfo.social.github && (
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-110 transition-all" aria-label="GitHub">
                  <Github size={24} />
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:scale-110 transition-all" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
