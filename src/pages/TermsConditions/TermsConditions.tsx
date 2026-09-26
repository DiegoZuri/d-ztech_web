import { useTranslation } from 'react-i18next'
import LegalPage from '@/components/LegalPage/LegalPage'

interface LegalSection {
  title: string
  body: string
}

export default function TermsConditions() {
  const { t } = useTranslation()
  const sections = t('termsConditions.sections', { returnObjects: true }) as LegalSection[]

  return (
    <LegalPage
      seoTitle={t('termsConditions.seo.title')}
      seoDescription={t('termsConditions.seo.description')}
      path="/terms-and-conditions"
      eyebrow={t('termsConditions.eyebrow')}
      title={t('termsConditions.title')}
      lastUpdated={t('termsConditions.lastUpdated')}
      sections={sections}
    />
  )
}
