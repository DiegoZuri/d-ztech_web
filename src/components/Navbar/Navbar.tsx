import { useEffect, useState } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from '@/components/Logo/Logo'
import { navLinks } from '@/data/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell">
        <div
          className={`mt-4 flex items-center justify-between rounded-full border border-border bg-white/75 px-4 backdrop-blur-xl transition-all duration-400 ease-premium sm:px-5 ${
            scrolled ? 'h-14 shadow-soft' : 'h-16'
          }`}
        >
          <Logo variant="lockup" className="h-8 w-auto sm:h-10" />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-text' : 'text-muted hover:text-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                  </span>
                )}
              </RouterNavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-premium hover:bg-primary"
            >
              Let&rsquo;s Talk
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-colors hover:bg-surface-hover lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 bg-bg lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="shell flex h-full flex-col pt-28"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <RouterNavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-border py-5 text-3xl font-semibold tracking-tight transition-colors ${
                          isActive ? 'text-primary' : 'text-text'
                        }`
                      }
                    >
                      {link.label}
                    </RouterNavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-8 flex flex-col gap-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-white"
                >
                  Let&rsquo;s Talk
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>

              <div className="mt-auto flex items-center justify-between border-t border-border py-8">
                <Logo variant="lockup" className="h-10 w-auto" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
