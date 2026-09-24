import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Users,
  Factory,
  Store,
  Warehouse,
  ShoppingCart,
  LayoutDashboard,
  Bot,
} from 'lucide-react'

export interface SolutionMeta {
  slug: string
  icon: LucideIcon
}

export const solutions: SolutionMeta[] = [
  { slug: 'business-management', icon: Building2 },
  { slug: 'crm', icon: Users },
  { slug: 'erp', icon: Factory },
  { slug: 'pos', icon: Store },
  { slug: 'inventory-management', icon: Warehouse },
  { slug: 'ecommerce', icon: ShoppingCart },
  { slug: 'saas-platforms', icon: LayoutDashboard },
  { slug: 'dashboards-analytics', icon: LayoutDashboard },
  { slug: 'ai-business-tools', icon: Bot },
]

export interface IndustryMeta {
  key: string
  icon: LucideIcon
}

export const industries: IndustryMeta[] = [
  { key: 'retail', icon: Store },
  { key: 'professional-services', icon: Building2 },
  { key: 'real-estate', icon: Warehouse },
  { key: 'automotive', icon: Factory },
  { key: 'healthcare', icon: Users },
  { key: 'education', icon: LayoutDashboard },
  { key: 'logistics', icon: ShoppingCart },
  { key: 'technology-saas', icon: Bot },
]
