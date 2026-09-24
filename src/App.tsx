import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import PageTransition from '@/components/PageTransition/PageTransition'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import Home from '@/pages/Home/Home'
import Services from '@/pages/Services/Services'
import Solutions from '@/pages/Solutions/Solutions'
import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'

export default function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <MainLayout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/solutions"
            element={
              <PageTransition>
                <Solutions />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  )
}
