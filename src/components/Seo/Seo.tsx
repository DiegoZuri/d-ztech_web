import { useEffect } from 'react'

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

export default function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} — D&Z Technologies`
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', `https://dz-technologies.com${path}`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
  }, [title, description, path])

  return null
}
