import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'

interface LegalSection {
  title: string
  body: string
}

interface LegalPageProps {
  seoTitle: string
  seoDescription: string
  path: string
  eyebrow: string
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export default function LegalPage({
  seoTitle,
  seoDescription,
  path,
  eyebrow,
  title,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} path={path} />

      <section className="pb-24 pt-40 sm:pb-28 sm:pt-48">
        <div className="shell">
          <SectionTitle as="h1" eyebrow={eyebrow} title={title} description={lastUpdated} className="max-w-3xl" />

          <div className="mt-16 flex max-w-3xl flex-col gap-10">
            {sections.map((section) => (
              <AnimatedSection key={section.title}>
                <div className="flex flex-col gap-3 border-t border-border pt-8">
                  <h2 className="text-lg font-semibold tracking-tight text-text">{section.title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{section.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
