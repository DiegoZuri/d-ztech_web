import type { ReactNode } from 'react'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'

interface SectionTitleProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  /** Use 'h1' once per page for the hero title; defaults to 'h2' for in-page sections */
  as?: 'h1' | 'h2'
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as = 'h2',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const Heading = as

  return (
    <AnimatedSection className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="text-balance font-display text-[32px] font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl lg:text-[44px]">
        {title}
      </Heading>
      {description && (
        <p className="text-balance text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </AnimatedSection>
  )
}
