import { Card } from '@/components/ui/Card'
import { services } from '@/data/services'

export const ServicesSection = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-2 text-center">Services I Offer</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Professional services tailored to your needs</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          const Icon = service.icon
          return (
            <Card key={service.id} className={`hover-lift will-animate animate-scale-in stagger-${idx + 1}`}>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                  <Icon className="text-primary-600 dark:text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
