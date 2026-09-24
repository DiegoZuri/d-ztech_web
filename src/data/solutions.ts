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

export interface Solution {
  slug: string
  icon: LucideIcon
  title: string
  category: string
  problem: string
  solution: string
  result: string
}

export const solutions: Solution[] = [
  {
    slug: 'business-management',
    icon: Building2,
    title: 'Business Management Systems',
    category: 'Operations',
    problem: 'Teams tracking operations across spreadsheets, emails, and disconnected tools.',
    solution: 'A centralized platform tailored to your processes, roles, and reporting needs.',
    result: 'One source of truth, fewer errors, and faster day-to-day decisions.',
  },
  {
    slug: 'crm',
    icon: Users,
    title: 'CRM Platforms',
    category: 'Sales & Customer',
    problem: 'Customer data scattered across inboxes, sheets, and generic tools that don’t fit your sales process.',
    solution: 'A CRM built around your actual pipeline, customer lifecycle, and team structure.',
    result: 'A clear view of every relationship and a sales process your team actually follows.',
  },
  {
    slug: 'erp',
    icon: Factory,
    title: 'ERP Systems',
    category: 'Operations',
    problem: 'Finance, inventory, and operations running on disconnected legacy systems.',
    solution: 'A unified ERP core connecting operations, finance, and reporting in real time.',
    result: 'Consistent data across departments and dramatically less manual reconciliation.',
  },
  {
    slug: 'pos',
    icon: Store,
    title: 'Point of Sale (POS)',
    category: 'Retail',
    problem: 'In-store and online sales tracked separately, with no unified inventory view.',
    solution: 'A modern POS system connected directly to inventory, reporting, and online channels.',
    result: 'Accurate stock levels, faster checkout, and unified sales visibility.',
  },
  {
    slug: 'inventory-management',
    icon: Warehouse,
    title: 'Inventory Management',
    category: 'Operations',
    problem: 'Stock discrepancies, manual counts, and limited visibility across locations.',
    solution: 'A real-time inventory system with automated tracking and multi-location support.',
    result: 'Fewer stockouts, less overstocking, and reliable numbers your team can trust.',
  },
  {
    slug: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    category: 'Retail',
    problem: 'Generic storefronts that can’t support your catalog, pricing, or fulfillment logic.',
    solution: 'A tailored e-commerce experience built around your products and operations.',
    result: 'A storefront that scales with demand and reflects your brand precisely.',
  },
  {
    slug: 'saas-platforms',
    icon: LayoutDashboard,
    title: 'SaaS Platforms',
    category: 'Product',
    problem: 'An internal tool or idea with real product potential, but no clear path to market.',
    solution: 'A production-grade, multi-tenant SaaS platform built for real customers.',
    result: 'A product ready to onboard, bill, and support paying customers.',
  },
  {
    slug: 'dashboards-analytics',
    icon: LayoutDashboard,
    title: 'Dashboards & Analytics',
    category: 'Data',
    problem: 'Decisions made on gut feeling because data lives in too many places.',
    solution: 'Centralized dashboards that turn operational data into clear, real-time insight.',
    result: 'Faster, more confident decisions backed by live data.',
  },
  {
    slug: 'ai-business-tools',
    icon: Bot,
    title: 'AI-Powered Business Tools',
    category: 'Automation',
    problem: 'High-volume manual tasks like document review, tagging, or support triage.',
    solution: 'AI-assisted tools that handle repetitive cognitive work with human oversight.',
    result: 'More output from the same team, with quality checks built in.',
  },
]

export interface Industry {
  name: string
  icon: LucideIcon
}

export const industries: Industry[] = [
  { name: 'Retail', icon: Store },
  { name: 'Professional Services', icon: Building2 },
  { name: 'Real Estate', icon: Warehouse },
  { name: 'Automotive', icon: Factory },
  { name: 'Healthcare', icon: Users },
  { name: 'Education', icon: LayoutDashboard },
  { name: 'Logistics', icon: ShoppingCart },
  { name: 'Technology & SaaS', icon: Bot },
]
