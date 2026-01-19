import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const HomePage = lazy(() => import('@/pages/Home/HomePage').then(m => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('@/pages/About/AboutPage').then(m => ({ default: m.AboutPage })))
const ProjectsPage = lazy(() => import('@/pages/Projects/ProjectsPage').then(m => ({ default: m.ProjectsPage })))
const ResumePage = lazy(() => import('@/pages/Resume/ResumePage').then(m => ({ default: m.ResumePage })))
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })))
const BlogPage = lazy(() => import('@/pages/Blog/BlogPage').then(m => ({ default: m.BlogPage })))

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
