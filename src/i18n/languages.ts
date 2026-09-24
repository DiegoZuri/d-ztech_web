export const supportedLangs = ['en', 'es'] as const
export type Lang = (typeof supportedLangs)[number]
export const defaultLang: Lang = 'en'

export function isLang(value: string | undefined): value is Lang {
  return !!value && (supportedLangs as readonly string[]).includes(value)
}

export function getPreferredLang(): Lang {
  try {
    const stored = localStorage.getItem('lang')
    if (isLang(stored ?? undefined)) return stored as Lang
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to detection
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('es')) {
    return 'es'
  }
  return defaultLang
}
