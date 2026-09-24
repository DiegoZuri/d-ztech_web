import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'
import ContactForm from '@/components/ContactForm/ContactForm'
import { company } from '@/data/nav'

const projectCategories = [
  'Custom Software',
  'Web Application',
  'Mobile App',
  'SaaS Platform',
  'Automation',
  'AI Solution',
  'Integration',
  'Something else',
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Tell us about your project. D&Z Technologies would love to help you turn it into working software."
        path="/contact"
      />

      <section className="pb-24 pt-40 sm:pb-28 sm:pt-48">
        <div className="shell">
          <SectionTitle
            as="h1"
            eyebrow="Contact"
            title="Let's build something meaningful."
            description="Tell us about the problem you're trying to solve. We'll get back to you with real thoughts, not a sales script."
            className="max-w-3xl"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-6">
            <AnimatedSection>
              <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-10">
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="section-dark relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 grid-noise radial-fade opacity-40"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-[100px]"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-white">
                      Tell us what you&rsquo;re building.
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-inverse">
                      Not sure where your project fits? These are the kinds of work we take on
                      most often.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projectCategories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white/85"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-5 border-t border-white/10 pt-8 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-primary">
                        <Mail size={15} />
                      </span>
                      <a href={`mailto:${company.email}`} className="link-underline text-white/90">
                        {company.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-primary">
                        <Phone size={15} />
                      </span>
                      <a href={`tel:${company.phone}`} className="link-underline text-white/90">
                        {company.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-primary">
                        <MapPin size={15} />
                      </span>
                      <span className="text-white/90">{company.location}</span>
                    </li>
                  </ul>
                </div>

                <div className="relative mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
                  {company.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      className="group inline-flex items-center gap-1 text-xs font-medium text-white/70 transition-colors hover:text-white"
                    >
                      {s.label}
                      <ArrowUpRight
                        size={12}
                        className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
