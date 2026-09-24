import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Globe,
  Smartphone,
  Layers,
  Workflow,
  BrainCircuit,
  Network,
  Boxes,
} from 'lucide-react'

export interface ServiceDetail {
  slug: string
  icon: LucideIcon
  title: string
  short: string
  description: string
  benefits: string[]
  technologies: string[]
  useCases: string[]
}

export const services: ServiceDetail[] = [
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    short: 'Software engineered around your exact processes, not the other way around.',
    description:
      'We design and build bespoke software systems tailored to how your business actually operates — replacing rigid off-the-shelf tools with solutions that fit your workflows, your data, and your growth plans.',
    benefits: [
      'Built around your real workflows instead of forcing you to adapt',
      'Full ownership of the codebase and architecture',
      'Scales alongside your team and your data',
      'No licensing lock-in or per-seat pricing surprises',
    ],
    technologies: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker'],
    useCases: [
      'Internal operations platforms',
      'Legacy system modernization',
      'Data-intensive line-of-business tools',
    ],
  },
  {
    slug: 'web-development',
    icon: Globe,
    title: 'Web Development',
    short: 'Fast, accessible, beautifully engineered web applications.',
    description:
      'From marketing sites to complex web applications, we build performant front ends and resilient back ends using modern frameworks — engineered for speed, SEO, and long-term maintainability.',
    benefits: [
      'Sub-second load times and strong Core Web Vitals',
      'Responsive, accessible interfaces by default',
      'Component architecture built for reuse and scale',
      'SEO-friendly foundations from day one',
    ],
    technologies: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'Node.js'],
    useCases: ['Corporate & product websites', 'Client portals', 'Progressive web apps'],
  },
  {
    slug: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Application Development',
    short: 'Native-feeling apps for iOS and Android from a single codebase.',
    description:
      'We design and develop cross-platform mobile applications that feel native, perform reliably, and connect seamlessly to your existing systems and APIs.',
    benefits: [
      'One codebase for iOS and Android reduces cost and time to market',
      'Native performance and platform-appropriate UX',
      'Offline-first architecture where it matters',
      'Seamless integration with existing backends',
    ],
    technologies: ['Flutter', 'React Native', 'Firebase', 'REST & GraphQL APIs'],
    useCases: ['Customer-facing apps', 'Field service & logistics apps', 'Internal mobile tools'],
  },
  {
    slug: 'saas-development',
    icon: Layers,
    title: 'SaaS Development',
    short: 'Multi-tenant platforms built to launch, scale, and evolve.',
    description:
      'We architect and build SaaS products end to end — from multi-tenant data models and billing to onboarding flows and admin tooling — designed to scale as your customer base grows.',
    benefits: [
      'Multi-tenant architecture designed for scale from day one',
      'Subscription billing and usage metering built in',
      'Clear separation between product core and customer configuration',
      'Analytics and admin tooling for your internal teams',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloud infrastructure'],
    useCases: ['B2B SaaS platforms', 'Vertical software products', 'Internal tools turned products'],
  },
  {
    slug: 'business-automation',
    icon: Workflow,
    title: 'Business Automation',
    short: 'Remove manual work from the processes that slow your team down.',
    description:
      'We identify repetitive, error-prone manual processes and replace them with reliable automated workflows connected directly to the systems your team already uses.',
    benefits: [
      'Fewer manual errors and less repetitive work',
      'Faster turnaround on operational processes',
      'Automations that plug into your existing tools',
      'Clear audit trails for every automated action',
    ],
    technologies: ['Python', 'Node.js', 'Workflow engines', 'APIs & webhooks'],
    useCases: ['Document & data processing', 'Approval workflows', 'Reporting pipelines'],
  },
  {
    slug: 'ai-solutions',
    icon: BrainCircuit,
    title: 'AI & Data Solutions',
    short: 'Practical AI features grounded in your data, not hype.',
    description:
      'We help businesses apply AI where it creates real value — intelligent search, classification, summarization, and decision support — built on solid data foundations.',
    benefits: [
      'AI features scoped to measurable business outcomes',
      'Built on your own data, securely handled',
      'Human-in-the-loop design where accuracy matters',
      'Clear monitoring of model performance over time',
    ],
    technologies: ['Python', 'LLM APIs', 'Vector databases', 'Data pipelines'],
    useCases: ['Intelligent document processing', 'Search & recommendations', 'Internal copilots'],
  },
  {
    slug: 'system-integrations',
    icon: Network,
    title: 'API & System Integrations',
    short: 'Make your systems talk to each other reliably.',
    description:
      'We connect the tools your business already relies on — CRMs, ERPs, payment providers, internal databases — through robust, well-documented integrations that keep data consistent everywhere.',
    benefits: [
      'Single source of truth across disconnected systems',
      'Reliable, monitored data synchronization',
      'Documented APIs your team can build on',
      'Reduced manual data entry between platforms',
    ],
    technologies: ['REST & GraphQL', 'Webhooks', 'Message queues', 'ETL pipelines'],
    useCases: ['CRM ↔ ERP synchronization', 'Payment & billing integrations', 'Data warehousing'],
  },
  {
    slug: 'business-systems',
    icon: Boxes,
    title: 'Business Systems',
    short: 'Purpose-built platforms for how your organization runs.',
    description:
      'From internal dashboards to full operational platforms, we build the systems that support day-to-day decision making — combining data, workflow, and reporting in one place.',
    benefits: [
      'Centralized visibility across departments',
      'Custom dashboards for real-time decision making',
      'Role-based access built around your org structure',
      'Designed to grow with new business units',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Cloud infrastructure'],
    useCases: ['Management dashboards', 'Operational platforms', 'Reporting & analytics systems'],
  },
]
