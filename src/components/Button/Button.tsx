import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: boolean
  children: ReactNode
  className?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-[0_1px_0_rgba(255,255,255,0.15)_inset] hover:shadow-glow',
  secondary:
    'bg-secondary text-white hover:opacity-90',
  ghost:
    'bg-transparent text-text border border-border hover:border-border-strong hover:bg-surface-hover',
  'outline-light':
    'bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/5',
}

const sizeStyles: Record<Size, string> = {
  md: 'text-sm px-5 py-3',
  lg: 'text-[15px] px-7 py-4',
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-premium whitespace-nowrap select-none focus-visible:outline-2 focus-visible:outline-offset-2'

function Content({ icon, children }: { icon?: boolean; children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
        />
      )}
    </>
  )
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon = false, children, className = '', ...rest }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      <Content icon={icon}>{children}</Content>
    </button>
  ),
)
Button.displayName = 'Button'

interface LinkButtonProps extends BaseProps {
  to: string
}

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  icon = false,
  children,
  className = '',
}: LinkButtonProps) {
  return (
    <Link to={to} className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      <Content icon={icon}>{children}</Content>
    </Link>
  )
}

export default Button
