import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import SolutionCard from '@/components/SolutionCard/SolutionCard'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'
import { solutions, industries } from '@/data/solutions'

export default function Solutions() {
  return (
    <>
      <Seo
        title="Business Technology Solutions"
        description="Digital solutions built around the way your business works — from CRM and ERP to e-commerce, dashboards, and AI-powered business tools."
        path="/solutions"
      />

      {/* ================= HERO ================= */}
      <section className="pb-16 pt-40 sm:pt-48">
        <div className="shell">
          <SectionTitle
            as="h1"
            eyebrow="Solutions"
            title="Digital solutions built around the way your business works."
            description="We don't start with technology — we start with how your business actually runs. Every solution below is a category of problem we help solve, adapted to your specific operation."
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
                  title={solution.title}
                  category={solution.category}
                  problem={solution.problem}
                  solution={solution.solution}
                  result={solution.result}
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
            eyebrow="Industries"
            title="Built for different industries."
            description="The same engineering discipline, applied to the specific realities of your sector."
            className="mx-auto"
          />

          <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface/60 px-4 py-8 text-center transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-primary/40 hover:bg-surface">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg text-primary transition-transform duration-400 ease-premium group-hover:scale-110">
                    <industry.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-text">{industry.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Have a business problem, not a tech spec?"
        description="Tell us how your business runs today — we'll help you figure out what to build."
        primaryLabel="Start a Conversation"
        secondaryLabel="See our Services"
        secondaryTo="/services"
      />
    </>
  )
}
