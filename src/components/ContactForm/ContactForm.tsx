import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react'
import { validateContactForm } from '@/utils/validation'
import type { ContactFormErrors, ContactFormValues } from '@/utils/validation'
import { submitContactForm } from '@/utils/api'

const initialValues: ContactFormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function fieldClasses(hasError?: string) {
  return `w-full rounded-xl border bg-bg px-4 py-3.5 text-sm text-text placeholder:text-muted/70 transition-colors duration-300 focus:outline-none ${
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-border focus:border-primary'
  }`
}

export default function ContactForm() {
  const { t } = useTranslation()
  const projectTypes = t('contactForm.projectTypes', { returnObjects: true }) as string[]
  const budgets = t('contactForm.budgets', { returnObjects: true }) as string[]

  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validateContactForm(values, t)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      await submitContactForm(values)
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface px-8 py-20 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 size={28} />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-text">{t('contactForm.successTitle')}</h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted">{t('contactForm.successDescription')}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-primary hover:opacity-80"
        >
          {t('contactForm.sendAnother')}
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('contactForm.nameLabel')} <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            className={fieldClasses(errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder={t('contactForm.namePlaceholder')}
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-red-500">
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('contactForm.companyLabel')}
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={fieldClasses()}
            placeholder={t('contactForm.companyPlaceholder')}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('contactForm.emailLabel')} <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            className={fieldClasses(errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder={t('contactForm.emailPlaceholder')}
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-red-500">
              {errors.email}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('contactForm.phoneLabel')}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={fieldClasses(errors.phone)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder={t('contactForm.phonePlaceholder')}
          />
          {errors.phone && (
            <span id="phone-error" className="text-xs text-red-500">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('contactForm.projectTypeLabel')} <span className="text-primary">*</span>
          </label>
          <select
            id="projectType"
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            className={`${fieldClasses(errors.projectType)} appearance-none`}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          >
            <option value="">{t('contactForm.selectProjectType')}</option>
            {projectTypes.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <span id="projectType-error" className="text-xs text-red-500">
              {errors.projectType}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('contactForm.budgetLabel')}
          </label>
          <select
            id="budget"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={`${fieldClasses()} appearance-none`}
          >
            <option value="">{t('contactForm.selectRange')}</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted">
          {t('contactForm.messageLabel')} <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldClasses(errors.message)} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder={t('contactForm.messagePlaceholder')}
        />
        {errors.message && (
          <span id="message-error" className="text-xs text-red-500">
            {errors.message}
          </span>
        )}
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            <AlertCircle size={16} />
            {t('contactForm.errorMessage')}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 ease-premium hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('contactForm.sending')}
          </>
        ) : (
          <>
            {t('contactForm.submit')}
            <Send size={15} className="transition-transform duration-300 ease-premium group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}
