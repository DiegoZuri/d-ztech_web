import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '@/components/Logo/Logo'
import { Link } from '@/i18n/LocalizedLink'
import { company, navLinks } from '@/data/nav'
import { services } from '@/data/services'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="section-dark relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute inset-0 grid-noise radial-fade opacity-[0.4]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="shell relative py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo variant="full" plate className="h-11 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">{t('footer.description')}</p>
            <div className="flex items-center gap-3 pt-2">
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-medium text-muted transition-colors duration-300 hover:border-border-strong hover:text-text"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {t('footer.navigation')}
            </span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="link-underline text-sm text-muted transition-colors hover:text-text"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {t('footer.services')}
            </span>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="link-underline text-sm text-muted transition-colors hover:text-text"
                  >
                    {t(`services.items.${s.slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {t('footer.getInTouch')}
            </span>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-primary" />
                <a href={`mailto:${company.email}`} className="link-underline hover:text-text">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary" />
                <a href={`tel:${company.phone}`} className="link-underline hover:text-text">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{t('company.location')}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="group mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-text"
            >
              {t('footer.startProject')}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {company.name}. {t('footer.rights')}
          </span>
          <span>{t('footer.designed')}</span>
        </div>
      </div>
    </footer>
  )
}
