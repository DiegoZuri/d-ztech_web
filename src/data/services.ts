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

export interface ServiceMeta {
  slug: string
  icon: LucideIcon
  technologies: string[]
}

export const services: ServiceMeta[] = [
  {
    slug: 'custom-software',
    icon: Code2,
    technologies: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    slug: 'web-development',
    icon: Globe,
    technologies: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'Node.js'],
  },
  {
    slug: 'mobile-development',
    icon: Smartphone,
    technologies: ['Flutter', 'React Native', 'Firebase', 'REST & GraphQL APIs'],
  },
  {
    slug: 'saas-development',
    icon: Layers,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloud infrastructure'],
  },
  {
    slug: 'business-automation',
    icon: Workflow,
    technologies: ['Python', 'Node.js', 'Workflow engines', 'APIs & webhooks'],
  },
  {
    slug: 'ai-solutions',
    icon: BrainCircuit,
    technologies: ['Python', 'LLM APIs', 'Vector databases', 'Data pipelines'],
  },
  {
    slug: 'system-integrations',
    icon: Network,
    technologies: ['REST & GraphQL', 'Webhooks', 'Message queues', 'ETL pipelines'],
  },
  {
    slug: 'business-systems',
    icon: Boxes,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Cloud infrastructure'],
  },
]
