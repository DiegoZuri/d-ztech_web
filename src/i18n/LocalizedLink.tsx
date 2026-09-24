import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'
import type { LinkProps, NavLinkProps } from 'react-router-dom'
import { useLang } from './useLang'

function localize(to: string, lang: string) {
  if (!to.startsWith('/') || to.startsWith('//')) return to
  return to === '/' ? `/${lang}` : `/${lang}${to}`
}

export function Link({ to, ...rest }: LinkProps) {
  const lang = useLang()
  const target = typeof to === 'string' ? localize(to, lang) : to
  return <RouterLink to={target} {...rest} />
}

export function NavLink({ to, ...rest }: NavLinkProps) {
  const lang = useLang()
  const target = typeof to === 'string' ? localize(to, lang) : to
  return <RouterNavLink to={target} {...rest} />
}
