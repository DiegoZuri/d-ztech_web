import { StaggerGroup, StaggerItem } from '@/components/AnimatedSection/AnimatedSection'

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <StaggerGroup className="relative flex flex-col">
      <div
        className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:block"
        aria-hidden="true"
      />
      {steps.map((step) => (
        <StaggerItem key={step.number} direction="left">
          <div className="group flex gap-6 py-6 sm:gap-8">
            <div className="relative flex shrink-0 flex-col items-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-xs font-mono font-semibold text-muted transition-all duration-400 ease-premium group-hover:border-primary group-hover:text-primary">
                {step.number}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 border-b border-border pb-6 sm:pb-8" style={{ width: '100%' }}>
              <h3 className="text-lg font-semibold tracking-tight text-text sm:text-xl">{step.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  )
}
