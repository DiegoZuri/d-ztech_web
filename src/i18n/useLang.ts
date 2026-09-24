import { useLocation } from 'react-router-dom'
import { defaultLang, isLang, type Lang } from './languages'

export function useLang(): Lang {
  const { pathname } = useLocation()
  const segment = pathname.split('/')[1]
  return isLang(segment) ? segment : defaultLang
}
