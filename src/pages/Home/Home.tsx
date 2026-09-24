import { Sparkles } from 'lucide-react'
import Seo from '@/components/Seo/Seo'
import { LinkButton } from '@/components/Button/Button'
import HeroVisual from '@/components/HeroVisual/HeroVisual'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import TechnologyGrid from '@/components/TechnologyGrid/TechnologyGrid'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'
import { services } from '@/data/services'

const valueStrip = [
  'Custom Software',
  'Web Applications',
  'Mobile Apps',
  'SaaS Platforms',
  'Automation',
  'AI Solutions',
]

const processSteps = [
  { number: '01', title: 'Discover', description: 'We start by understanding your business, your users, and the problem worth solving.' },
  { number: '02', title: 'Design', description: 'We map the product experience and technical architecture before a line of code is written.' },
  { number: '03', title: 'Build', description: 'We develop in focused iterations, with visibility into progress at every stage.' },
  { number: '04', title: 'Launch', description: 'We ship carefully, with testing and monitoring built into the release process.' },
  { number: '05', title: 'Scale', description: 'We support and evolve the product as your usage and requirements grow.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Software Development & Digital Solutions"
        description="D&Z Technologies designs and builds custom software, web applications, mobile apps, SaaS platforms and automation systems that move businesses forward."
        path="/"
      />

      {/* ================= HERO ================= */}
      <section className="section-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-noise radial-fade opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]"
          aria-hidden="true"
        />

        <div className="shell relative grid grid-cols-1 items-center gap-16 pb-20 pt-40 sm:pt-44 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-48">
          <div className="flex flex-col gap-7">
            <AnimatedSection>
              <span className="eyebrow">
                <Sparkles size={13} />
                Software &middot; Technology &middot; Innovation
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h1 className="text-balance font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
                Building technology that moves businesses forward.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="text-balance max-w-xl text-base leading-relaxed text-muted-inverse sm:text-lg">
                We design and develop custom software, digital products, web and mobile
                applications, SaaS platforms, and automation systems - engineered to help
                businesses operate smarter and grow faster.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.24} className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <LinkButton to="/contact" variant="primary" size="lg" icon>
                Start a Project
              </LinkButton>
              <LinkButton to="/services" variant="outline-light" size="lg">
                Explore Services
              </LinkButton>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={0.2} className="relative">
            <HeroVisual />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= TRUST / VALUE STRIP ================= */}
      <section className="border-b border-border bg-bg-alt py-10">
        <div className="shell">
          <StaggerGroup className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
            {valueStrip.map((item) => (
              <StaggerItem key={item}>
                <span className="text-sm font-medium tracking-tight text-muted sm:text-base">{item}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-24 sm:py-32">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="What we do"
              title="Technology built around your business."
              description="From custom platforms to mobile experiences, we build software that fits the way your business actually operates."
            />
            <AnimatedSection delay={0.1}>
              <LinkButton to="/services" variant="ghost" icon className="shrink-0">
                View all services
              </LinkButton>
            </AnimatedSection>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.short}
                  index={i}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED SOLUTIONS / PROCESS ================= */}
      <section className="border-t border-border bg-bg-alt py-24 sm:py-32">
        <div className="shell grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow="How we work"
              title="From idea to scalable product."
              description="A clear, structured process that takes your business challenge from first conversation to a product running in production."
            />
            <AnimatedSection delay={0.15} className="mt-8">
              <LinkButton to="/about" variant="ghost" icon>
                Learn about our approach
              </LinkButton>
            </AnimatedSection>
          </div>

          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* ================= TECHNOLOGY SECTION ================= */}
      <section className="py-24 sm:py-32">
        <div className="shell">
          <SectionTitle
            align="center"
            eyebrow="Technology ecosystem"
            title="Powered by a modern, proven stack."
            description="We choose technology deliberately — proven where reliability matters, modern where it creates an advantage. Hover a node to explore."
            className="mx-auto"
          />

          <div className="mt-16">
            <TechnologyGrid />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <CTA
        title="Have an idea worth building?"
        description="Let's turn your business challenge into a digital product."
        primaryLabel="Start a Conversation"
        secondaryLabel="View Solutions"
        secondaryTo="/solutions"
      />
    </>
  )
}
