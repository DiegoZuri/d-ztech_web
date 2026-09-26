import { useTranslation } from 'react-i18next'
import LegalPage from '@/components/LegalPage/LegalPage'

interface LegalSection {
  title: string
  body: string
}

export default function PrivacyPolicy() {
  const { t } = useTranslation()
  const sections = t('privacyPolicy.sections', { returnObjects: true }) as LegalSection[]

  return (
    <LegalPage
      seoTitle={t('privacyPolicy.seo.title')}
      seoDescription={t('privacyPolicy.seo.description')}
      path="/privacy-policy"
      eyebrow={t('privacyPolicy.eyebrow')}
      title={t('privacyPolicy.title')}
      lastUpdated={t('privacyPolicy.lastUpdated')}
      sections={sections}
    />
  )
}
