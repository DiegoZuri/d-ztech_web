import { useTranslation } from 'react-i18next'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  category: string
  problem: string
  solution: string
  result: string
}

export default function SolutionCard({ icon: Icon, title, category, problem, solution, result }: SolutionCardProps) {
  const { t } = useTranslation()
  return (
    <div className="group flex flex-col gap-6 rounded-2xl border border-border bg-surface p-7 transition-all duration-400 ease-premium hover:border-border-strong hover:shadow-elevated">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-alt text-primary">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
          {category}
        </span>
      </div>

      <h2 className="text-lg font-semibold tracking-tight text-text">{title}</h2>

      <div className="flex flex-col gap-3 border-t border-border pt-5 text-sm">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 w-[72px] shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
            {t('solutionCard.problem')}
          </span>
          <p className="text-muted">{problem}</p>
        </div>
        <div className="flex items-center gap-2 pl-[6px] text-primary">
          <ArrowRight size={14} className="rotate-90" />
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 w-[72px] shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
            {t('solutionCard.solution')}
          </span>
          <p className="text-text">{solution}</p>
        </div>
        <div className="flex items-center gap-2 pl-[6px] text-primary">
          <ArrowRight size={14} className="rotate-90" />
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 w-[72px] shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
            {t('solutionCard.result')}
          </span>
          <p className="font-medium text-text">{result}</p>
        </div>
      </div>
    </div>
  )
}
