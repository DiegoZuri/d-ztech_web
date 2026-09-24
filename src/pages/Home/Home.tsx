import { Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo/Seo'
import { LinkButton } from '@/components/Button/Button'
import HeroVisual from '@/components/HeroVisual/HeroVisual'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import type { ProcessStep } from '@/components/ProcessSteps/ProcessSteps'
import TechnologyGrid from '@/components/TechnologyGrid/TechnologyGrid'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'
import { services } from '@/data/services'

export default function Home() {
  const { t } = useTranslation()
  const valueStrip = t('home.valueStrip', { returnObjects: true }) as string[]
  const processSteps = t('home.processSteps', { returnObjects: true }) as ProcessStep[]

  return (
    <>
      <Seo title={t('home.seo.title')} description={t('home.seo.description')} path="/" />

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
                {t('home.eyebrow')}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h1 className="text-balance font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
                {t('home.heroTitle')}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="text-balance max-w-xl text-base leading-relaxed text-muted-inverse sm:text-lg">
                {t('home.heroDescription')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.24} className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <LinkButton to="/contact" variant="primary" size="lg" icon>
                {t('common.startAProject')}
              </LinkButton>
              <LinkButton to="/services" variant="outline-light" size="lg">
                {t('common.exploreServices')}
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
              eyebrow={t('home.servicesEyebrow')}
              title={t('home.servicesTitle')}
              description={t('home.servicesDescription')}
            />
            <AnimatedSection delay={0.1}>
              <LinkButton to="/services" variant="ghost" icon className="shrink-0">
                {t('common.viewAllServices')}
              </LinkButton>
            </AnimatedSection>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <ServiceCard
                  icon={service.icon}
                  title={t(`services.items.${service.slug}.title`)}
                  description={t(`services.items.${service.slug}.short`)}
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
              eyebrow={t('home.processEyebrow')}
              title={t('home.processTitle')}
              description={t('home.processDescription')}
            />
            <AnimatedSection delay={0.15} className="mt-8">
              <LinkButton to="/about" variant="ghost" icon>
                {t('common.learnAboutApproach')}
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
            eyebrow={t('home.techEyebrow')}
            title={t('home.techTitle')}
            description={t('home.techDescription')}
            className="mx-auto"
          />

          <div className="mt-16">
            <TechnologyGrid />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <CTA
        title={t('home.ctaTitle')}
        description={t('home.ctaDescription')}
        secondaryLabel={t('common.viewSolutions')}
        secondaryTo="/solutions"
      />
    </>
  )
}
