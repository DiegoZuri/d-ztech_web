import { Link } from 'react-router-dom'
import isotipo from '@/assets/logo/isotipo.png'
import logotipo from '@/assets/logo/logotipo.png'

interface LogoProps {
  /**
   * 'full'   — the complete raster lockup (icon + wordmark), best at larger sizes
   * 'mark'   — icon only
   * 'lockup' — icon (unaltered asset) + live text wordmark, for compact contexts
   *            like the navbar where shrinking the full raster would make the
   *            "Technologies" line illegible
   */
  variant?: 'full' | 'mark' | 'lockup'
  className?: string
  linkToHome?: boolean
  /** Wrap the mark in a white plate — use on dark backgrounds so the logo keeps full contrast without altering it */
  plate?: boolean
}

export default function Logo({
  variant = 'full',
  className = '',
  linkToHome = true,
  plate = false,
}: LogoProps) {
  let img: JSX.Element

  if (variant === 'lockup') {
    img = (
      <span className="inline-flex items-center gap-2.5">
        <img src={isotipo} alt="" className={className || 'h-8 w-auto'} />
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight text-text">
            D<span className="text-primary">&amp;</span>Z
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
            Technologies
          </span>
        </span>
      </span>
    )
  } else if (variant === 'full') {
    img = <img src={logotipo} alt="D&Z Technologies" className={className || 'h-8 w-auto sm:h-9'} />
  } else {
    img = <img src={isotipo} alt="D&Z Technologies" className={className || 'h-9 w-auto'} />
  }

  if (plate) {
    img = (
      <span className="inline-flex items-center rounded-xl bg-white px-3.5 py-2.5 shadow-soft">
        {img}
      </span>
    )
  }

  if (!linkToHome) return img

  return (
    <Link
      to="/"
      aria-label="D&Z Technologies — Home"
      className="inline-flex items-center rounded-md transition-opacity duration-300 hover:opacity-80"
    >
      {img}
    </Link>
  )
}
