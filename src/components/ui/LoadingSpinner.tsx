export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 dark:border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
