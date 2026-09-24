import { LinkButton } from '@/components/Button/Button'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'

interface CTAProps {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTA({
  eyebrow = 'START A PROJECT',
  title,
  description,
  primaryLabel = 'Start a Conversation',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}: CTAProps) {
  return (
    <section className="section-dark relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-noise radial-fade opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]"
        aria-hidden="true"
      />

      <div className="shell relative flex flex-col items-center gap-8 text-center">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="text-balance max-w-3xl font-display text-[36px] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="text-balance max-w-xl text-base leading-relaxed text-muted-inverse sm:text-lg">
              {description}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="flex flex-col items-center gap-4 sm:flex-row">
          <LinkButton to={primaryTo} variant="primary" size="lg" icon>
            {primaryLabel}
          </LinkButton>
          {secondaryLabel && secondaryTo && (
            <LinkButton to={secondaryTo} variant="outline-light" size="lg">
              {secondaryLabel}
            </LinkButton>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
