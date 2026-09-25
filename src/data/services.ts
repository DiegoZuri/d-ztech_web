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
import customSoftwareImage from '@/assets/services/custom-software.png'
import webDevelopmentImage from '@/assets/services/web-development.png'
import mobileDevelopmentImage from '@/assets/services/mobile-development.png'
import saasDevelopmentImage from '@/assets/services/saas-development.png'
import businessAutomationImage from '@/assets/services/business-automation.png'
import aiSolutionsImage from '@/assets/services/ai-solutions.png'
import systemIntegrationsImage from '@/assets/services/system-integrations.png'

export interface ServiceMeta {
  slug: string
  icon: LucideIcon
  technologies: string[]
  image?: string
}

export const services: ServiceMeta[] = [
  {
    slug: 'custom-software',
    icon: Code2,
    technologies: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker'],
    image: customSoftwareImage,
  },
  {
    slug: 'web-development',
    icon: Globe,
    technologies: ['React', 'Next.js', 'Laravel', 'Tailwind CSS', 'Node.js'],
    image: webDevelopmentImage,
  },
  {
    slug: 'mobile-development',
    icon: Smartphone,
    technologies: ['Flutter', 'React Native', 'Firebase', 'REST & GraphQL APIs'],
    image: mobileDevelopmentImage,
  },
  {
    slug: 'saas-development',
    icon: Layers,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloud infrastructure'],
    image: saasDevelopmentImage,
  },
  {
    slug: 'business-automation',
    icon: Workflow,
    technologies: ['Python', 'Node.js', 'Workflow engines', 'APIs & webhooks'],
    image: businessAutomationImage,
  },
  {
    slug: 'ai-solutions',
    icon: BrainCircuit,
    technologies: ['Python', 'LLM APIs', 'Vector databases', 'Data pipelines'],
    image: aiSolutionsImage,
  },
  {
    slug: 'system-integrations',
    icon: Network,
    technologies: ['REST & GraphQL', 'Webhooks', 'Message queues', 'ETL pipelines'],
    image: systemIntegrationsImage,
  },
  {
    slug: 'business-systems',
    icon: Boxes,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Cloud infrastructure'],
  },
]
