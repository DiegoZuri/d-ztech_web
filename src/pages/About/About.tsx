import { Lightbulb, ShieldCheck, Eye, Users2, TrendingUp } from 'lucide-react'
import Seo from '@/components/Seo/Seo'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import CTA from '@/components/CTA/CTA'
import AnimatedSection, { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'

const approachSteps = [
  { number: '01', title: 'Understand', description: 'We start by learning your business, your users, and the real constraints behind the request — not just the feature list.' },
  { number: '02', title: 'Strategize', description: 'We define the right scope and technical direction before committing to a build, so effort goes where it matters.' },
  { number: '03', title: 'Design', description: 'We shape the experience and the architecture together, so the product is coherent from the interface down to the data model.' },
  { number: '04', title: 'Develop', description: 'We build in focused, visible iterations — with working software you can see and react to throughout.' },
  { number: '05', title: 'Improve', description: 'We treat launch as a starting point. We monitor, listen, and keep refining as real usage reveals what matters.' },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay close to modern tools and techniques, and apply them only where they genuinely improve the outcome.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'We treat code quality, testing, and reliability as part of the deliverable — not an afterthought.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'You should always know what’s being built, why, and where things stand. No black boxes.',
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'The best software comes from a real partnership between your team’s knowledge and our engineering.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'We design systems to handle the business you’re building toward, not just the one you have today.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About D&Z Technologies"
        description="Who we are, what we believe, and how D&Z Technologies approaches custom software development."
        path="/about"
      />

      {/* ================= HERO ================= */}
      <section className="pb-16 pt-40 sm:pt-48">
        <div className="shell">
          <SectionTitle
            as="h1"
            eyebrow="About us"
            title="Technology with purpose."
            description="D&Z Technologies is a software development company built around a simple idea: technology should make a business measurably better — not just look impressive. Everything we build is judged against that standard."
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* ================= WHO / WHAT / HOW ================= */}
      <section className="py-16 sm:py-20">
        <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-3">
          {[
            {
              title: 'Who we are',
              body: 'A software development team focused on building custom digital products — web platforms, mobile apps, SaaS products, and the systems that run behind them.',
            },
            {
              title: 'What we believe',
              body: 'Good software is judged by outcomes, not aesthetics alone. We believe in clear communication, sound architecture, and building things that are genuinely maintainable.',
            },
            {
              title: 'How we work',
              body: 'Close collaboration, iterative delivery, and honest technical judgment — even when it means recommending a simpler solution than the one originally requested.',
            },
          ].map((block, i) => (
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
              eyebrow="Our approach"
              title="What makes our process different."
              description="A methodical, five-stage approach that keeps engineering decisions grounded in your actual business needs from day one through to launch and beyond."
            />
          </div>
          <ProcessSteps steps={approachSteps} />
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 sm:py-32">
        <div className="shell">
          <SectionTitle align="center" eyebrow="Values" title="What we hold ourselves to." className="mx-auto" />

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-border-strong hover:shadow-elevated">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-alt text-primary transition-all duration-400 ease-premium group-hover:bg-primary group-hover:text-white">
                    <v.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-text">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Want to know if we're the right fit?"
        description="The best way to find out is a conversation about what you're building."
        primaryLabel="Start a Conversation"
      />
    </>
  )
}
