import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card = ({ children, className, hover = false }: CardProps) => {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300',
      hover && 'hover:shadow-xl hover:-translate-y-1',
      className
    )}>
      {children}
    </div>
  )
}
