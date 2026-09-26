import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import MainLayout from '@/layouts/MainLayout/MainLayout'
import PageTransition from '@/components/PageTransition/PageTransition'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { useLang } from '@/i18n/useLang'
import { getPreferredLang, isLang } from '@/i18n/languages'
import Home from '@/pages/Home/Home'
import Services from '@/pages/Services/Services'
import Solutions from '@/pages/Solutions/Solutions'
import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'
import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from '@/pages/TermsConditions/TermsConditions'

const knownPaths = ['services', 'solutions', 'about', 'contact', 'privacy-policy', 'terms-and-conditions']

function RootRedirect() {
  const { pathname } = useLocation()
  const lang = getPreferredLang()
  const stripped = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
  const target = knownPaths.includes(stripped) ? `/${lang}/${stripped}` : `/${lang}`
  return <Navigate to={target} replace />
}

function LangBoundary() {
  const lang = useLang()
  const { pathname } = useLocation()
  const segment = pathname.split('/')[1]
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // localStorage unavailable — safe to ignore
    }
  }, [lang, i18n])

  if (!isLang(segment)) {
    const rest = pathname.split('/').slice(2).join('/')
    return <Navigate to={`/${lang}${rest ? `/${rest}` : ''}`} replace />
  }

  return <Outlet />
}

export default function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <MainLayout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LangBoundary />}>
            <Route
              index
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="solutions"
              element={
                <PageTransition>
                  <Solutions />
                </PageTransition>
              }
            />
            <Route
              path="about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />
            <Route
              path="terms-and-conditions"
              element={
                <PageTransition>
                  <TermsConditions />
                </PageTransition>
              }
            />
          </Route>
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  )
}
