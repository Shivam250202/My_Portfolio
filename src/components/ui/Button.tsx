import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = ({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  }

  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-all disabled:opacity-50 relative overflow-hidden group',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2 group-hover:zigzag-hover">
        {children}
      </span>
    </button>
  )
}
