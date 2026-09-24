import { useEffect } from 'react'
import { useLang } from '@/i18n/useLang'

interface SeoProps {
  title: string
  description: string
  path?: string
}

function setMeta(nameOrProp: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${nameOrProp}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(nameOrProp, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let tag = document.querySelector<HTMLLinkElement>(selector)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    if (hreflang) tag.setAttribute('hreflang', hreflang)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/' }: SeoProps) {
  const lang = useLang()

  useEffect(() => {
    const fullTitle = `${title} — D&Z Technologies`
    document.title = fullTitle
    document.documentElement.lang = lang

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:locale', lang === 'es' ? 'es_ES' : 'en_US')
    setMeta('property', 'og:url', `https://dz-technologies.com/${lang}${path === '/' ? '' : path}`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)

    setLink('canonical', `https://dz-technologies.com/${lang}${path === '/' ? '' : path}`)
    setLink('alternate', `https://dz-technologies.com/en${path === '/' ? '' : path}`, 'en')
    setLink('alternate', `https://dz-technologies.com/es${path === '/' ? '' : path}`, 'es')
    setLink('alternate', `https://dz-technologies.com/en${path === '/' ? '' : path}`, 'x-default')
  }, [title, description, path, lang])

  return null
}
