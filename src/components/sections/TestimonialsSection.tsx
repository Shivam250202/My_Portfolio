import { Card } from '@/components/ui/Card'
import { testimonials } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export const TestimonialsSection = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-2 text-center">What People Say</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Testimonials from colleagues and clients</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <Card key={testimonial.id} className={`hover-lift will-animate animate-scale-in stagger-${idx + 1}`}>
            <Quote className="text-primary-500 mb-4" size={32} />
            <p className="text-gray-600 dark:text-gray-400 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
