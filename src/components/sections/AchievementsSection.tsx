import { Card } from '@/components/ui/Card'
import { achievements } from '@/data/achievements'
import { Trophy, Award, Code, Star } from 'lucide-react'

const iconMap = {
  Award: Award,
  Hackathon: Trophy,
  'Open Source': Code,
  Recognition: Star,
}

export const AchievementsSection = () => {
  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-2 text-center">Achievements & Awards</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Recognition and accomplishments</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => {
          const Icon = iconMap[achievement.category]
          return (
            <Card key={achievement.id} className={`hover-lift will-animate animate-slide-up stagger-${idx + 1}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Icon className="text-primary-600 dark:text-primary-500" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{achievement.title}</h3>
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
