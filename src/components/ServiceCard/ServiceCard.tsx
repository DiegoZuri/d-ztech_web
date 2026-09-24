import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  to?: string
  index?: number
}

export default function ServiceCard({ icon: Icon, title, description, to = '/services', index = 0 }: ServiceCardProps) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-border-strong hover:shadow-elevated"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 ease-premium group-hover:bg-primary/10"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-alt text-primary transition-all duration-400 ease-premium group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
            <Icon size={20} strokeWidth={1.75} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-text">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{description}</p>
        </div>
      </div>

      <div className="relative mt-8 flex items-center gap-1.5 text-sm font-semibold text-text">
        Learn more
        <ArrowUpRight
          size={15}
          className="transition-transform duration-400 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </Link>
  )
}
