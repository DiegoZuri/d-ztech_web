import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'
import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'
import { LinkButton } from '@/components/Button/Button'
import { services } from '@/data/services'

function ServiceVisual({ icon: Icon, index }: { icon: LucideIcon; index: number }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-bg-alt">
      <div className="absolute inset-0 grid-noise radial-fade opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[70px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-surface shadow-elevated sm:h-28 sm:w-28">
          <Icon size={40} strokeWidth={1.5} className="text-primary" />
        </div>
      </div>
      <span className="absolute left-5 top-5 font-mono text-xs text-muted">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full border border-border bg-surface" />
      <div className="absolute right-8 top-8 h-4 w-4 rounded-full border border-border bg-surface" />
    </div>
  )
}

export default function Services() {
  return (
    <>
      <Seo
        title="Software Development Services"
        description="Custom software, web, mobile, SaaS, automation, AI and integration services engineered for real business needs."
        path="/services"
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <div className="shell">
          <SectionTitle
            as="h1"
            eyebrow="Services"
            title="Technology services designed for real business needs."
            description="We cover the full lifecycle of software development — from the first line of code to the systems that keep your product running. Every engagement is scoped around a concrete business outcome, not a generic package."
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* ================= SERVICE SUMMARY STRIP ================= */}
      <section className="border-y border-border bg-bg-alt py-8">
        <div className="shell">
          <StaggerGroup className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <a href={`#${s.slug}`} className="link-underline text-sm font-medium text-muted hover:text-text">
                  {s.title}
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="py-4">
        <div className="shell flex flex-col">
          {services.map((service, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                id={service.slug}
                key={service.slug}
                className={`grid grid-cols-1 items-center gap-10 border-b border-border py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 ${
                  i === services.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <AnimatedSection
                  direction={reversed ? 'right' : 'left'}
                  className={reversed ? 'lg:order-2' : ''}
                >
                  <ServiceVisual icon={service.icon} index={i} />
                </AnimatedSection>

                <AnimatedSection direction={reversed ? 'left' : 'right'} className={reversed ? 'lg:order-1' : ''}>
                  <div className="flex flex-col gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-alt text-primary">
                      <service.icon size={22} strokeWidth={1.75} />
                    </div>
                    <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-text sm:text-[28px]">
                      {service.title}
                    </h2>
                    <p className="text-balance text-base leading-relaxed text-muted">{service.description}</p>

                    <ul className="flex flex-col gap-2.5">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-text">
                          <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-3 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Common use cases
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((u) => (
                          <span
                            key={u}
                            className="rounded-full bg-bg-alt px-3 py-1.5 text-xs font-medium text-text"
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            )
          })}
        </div>
      </section>

      {/* ================= SOLUTIONS CROSS-LINK ================= */}
      <section className="border-t border-border bg-bg-alt py-20 sm:py-24">
        <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex max-w-lg flex-col gap-3">
            <span className="eyebrow">Looking for a business outcome instead?</span>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-tight text-text sm:text-[28px]">
              See how these services translate into real business solutions.
            </h2>
          </div>
          <LinkButton to="/solutions" variant="secondary" size="lg" icon className="shrink-0">
            Explore Solutions
          </LinkButton>
        </div>
      </section>

      <CTA
        title="Not sure which service fits?"
        description="Tell us about your project and we'll help you find the right approach."
        primaryLabel="Start a Conversation"
      />
    </>
  )
}
