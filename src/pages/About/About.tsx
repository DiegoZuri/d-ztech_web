import { Lightbulb, ShieldCheck, Eye, Users2, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import type { ProcessStep } from '@/components/ProcessSteps/ProcessSteps'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'

const valueIcons: LucideIcon[] = [Lightbulb, ShieldCheck, Eye, Users2, TrendingUp]

interface Block {
  title: string
  body: string
}

interface Value {
  title: string
  description: string
}

export default function About() {
  const { t } = useTranslation()
  const blocks = t('about.blocks', { returnObjects: true }) as Block[]
  const approachSteps = t('about.approachSteps', { returnObjects: true }) as ProcessStep[]
  const values = t('about.values', { returnObjects: true }) as Value[]

  return (
    <>
      <Seo title={t('about.seo.title')} description={t('about.seo.description')} path="/about" />

      {/* ================= HERO ================= */}
      <section className="pb-16 pt-40 sm:pt-48">
        <div className="shell">
          <SectionTitle
            as="h1"
            eyebrow={t('about.heroEyebrow')}
            title={t('about.heroTitle')}
            description={t('about.heroDescription')}
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* ================= WHO / WHAT / HOW ================= */}
      <section className="py-16 sm:py-20">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-3">
          {blocks.map((block, i) => (
            <AnimatedSection key={block.title} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-7">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-lg font-semibold tracking-tight text-text">{block.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{block.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="border-t border-border bg-bg-alt py-24 sm:py-32">
        <div className="shell grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow={t('about.approachEyebrow')}
              title={t('about.approachTitle')}
              description={t('about.approachDescription')}
            />
          </div>
          <ProcessSteps steps={approachSteps} />
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 sm:py-32">
        <div className="shell">
          <SectionTitle align="center" eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} className="mx-auto" />

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => {
              const Icon = valueIcons[i]
              return (
                <StaggerItem key={v.title}>
                  <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-border-strong hover:shadow-elevated">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-alt text-primary transition-all duration-400 ease-premium group-hover:bg-primary group-hover:text-white">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-text">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{v.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTA title={t('about.ctaTitle')} description={t('about.ctaDescription')} />
    </>
  )
}
