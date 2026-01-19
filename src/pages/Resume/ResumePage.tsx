import { experiences } from '@/data/experience'
import { education } from '@/data/education'
import { skills } from '@/data/skills'
import { certifications } from '@/data/certifications'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Download, Briefcase, GraduationCap, Award, Wrench } from 'lucide-react'

export const ResumePage = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/src/assets/SHIVAM_PANDEY.pdf'
    link.download = 'Shivam_Pandey_Resume.pdf'
    link.click()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fade-in">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Resume</h1>
          <p className="text-gray-600 dark:text-gray-400">My professional experience and qualifications</p>
        </div>
        <Button onClick={handleDownload} className="flex items-center gap-2 group w-full sm:w-auto justify-center">
          <Download size={20} className="group-hover:translate-y-1 transition-transform" /> Download PDF
        </Button>
      </div>

      <div className="space-y-12">
        <section className="animate-slide-up stagger-1">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary-600 dark:text-primary-500" size={28} />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card key={exp.id} className={`hover-lift will-animate animate-slide-in-left stagger-${idx + 1}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold">{exp.position}</h3>
                    <p className="text-primary-600 dark:text-primary-500 font-medium text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base whitespace-nowrap">{exp.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="mb-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-primary-600 dark:text-primary-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm hover:scale-105 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-slide-up stagger-2">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="text-primary-600 dark:text-primary-500" size={28} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <Card key={skill.category} className={`hover-lift will-animate animate-scale-in stagger-${idx + 1}`}>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-slide-up stagger-3">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary-600 dark:text-primary-500" size={28} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card key={edu.id} className={`hover-lift will-animate animate-slide-in-right stagger-${idx + 1}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                    <p className="text-primary-600 dark:text-primary-500 font-medium text-sm sm:text-base">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.field}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{edu.duration}</p>
                    {edu.grade && <p className="font-semibold text-primary-600 dark:text-primary-500">{edu.grade}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-slide-up stagger-4">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary-600 dark:text-primary-500" size={28} />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <Card key={cert.id} className={`hover-lift will-animate animate-scale-in stagger-${idx + 1}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{cert.name}</h3>
                    {cert.date && <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    cert.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    cert.status === 'In Progress' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
