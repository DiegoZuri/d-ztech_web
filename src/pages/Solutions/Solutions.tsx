import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import SolutionCard from '@/components/SolutionCard/SolutionCard'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'
import { solutions, industries } from '@/data/solutions'

export default function Solutions() {
  const { t } = useTranslation()

  return (
    <>
      <Seo title={t('solutions.seo.title')} description={t('solutions.seo.description')} path="/solutions" />

      {/* ================= HERO ================= */}
      <section className="pb-16 pt-40 sm:pt-48">
        <div className="shell">
          <SectionTitle
            as="h1"
            eyebrow={t('solutions.heroEyebrow')}
            title={t('solutions.heroTitle')}
            description={t('solutions.heroDescription')}
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* ================= SOLUTION CATEGORIES ================= */}
      <section className="py-4">
        <div className="shell">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <AnimatedSection key={solution.slug} delay={(i % 3) * 0.08}>
                <SolutionCard
                  icon={solution.icon}
                  title={t(`solutions.items.${solution.slug}.title`)}
                  category={t(`solutions.items.${solution.slug}.category`)}
                  problem={t(`solutions.items.${solution.slug}.problem`)}
                  solution={t(`solutions.items.${solution.slug}.solution`)}
                  result={t(`solutions.items.${solution.slug}.result`)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="section-dark relative mt-24 overflow-hidden py-24 sm:mt-32 sm:py-28">
        <div className="pointer-events-none absolute inset-0 grid-noise radial-fade opacity-40" aria-hidden="true" />
        <div className="shell relative">
          <SectionTitle
            align="center"
            eyebrow={t('solutions.industriesEyebrow')}
            title={t('solutions.industriesTitle')}
            description={t('solutions.industriesDescription')}
            className="mx-auto"
          />

          <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((industry) => (
              <StaggerItem key={industry.key}>
                <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface/60 px-4 py-8 text-center transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-primary/40 hover:bg-surface">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg text-primary transition-transform duration-400 ease-premium group-hover:scale-110">
                    <industry.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-text">{t(`solutions.industries.${industry.key}`)}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title={t('solutions.ctaTitle')}
        description={t('solutions.ctaDescription')}
        secondaryLabel={t('common.seeServices')}
        secondaryTo="/services"
      />
    </>
  )
}
