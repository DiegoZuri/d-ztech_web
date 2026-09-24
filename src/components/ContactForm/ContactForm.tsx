import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react'
import { validateContactForm } from '@/utils/validation'
import type { ContactFormErrors, ContactFormValues } from '@/utils/validation'
import { submitContactForm } from '@/utils/api'

const projectTypes = [
  'Custom Software',
  'Web Application',
  'Mobile App',
  'SaaS Platform',
  'Automation',
  'AI Solution',
  'Other',
]

const budgets = ['Under $1k', '$1k – $3k', '$3k – $5k', '$5k – $10k', '$10k+', 'Not sure yet']

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
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validateContactForm(values)
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
        <h2 className="text-xl font-semibold tracking-tight text-text">Inquiry sent.</h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out — we&rsquo;ve received your project details and will get back
          to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold text-primary hover:opacity-80"
        >
          Send another inquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Name <span className="text-primary">*</span>
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
            placeholder="Jane Cooper"
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-red-500">
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            className={fieldClasses()}
            placeholder="Company name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Email <span className="text-primary">*</span>
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
            placeholder="jane@company.com"
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-red-500">
              {errors.email}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Phone
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
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <span id="phone-error" className="text-xs text-red-500">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Project type <span className="text-primary">*</span>
          </label>
          <select
            id="projectType"
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            className={`${fieldClasses(errors.projectType)} appearance-none`}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
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
            Estimated budget
          </label>
          <select
            id="budget"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={`${fieldClasses()} appearance-none`}
          >
            <option value="">Select a range</option>
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
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldClasses(errors.message)} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us what you're building, the problem you're solving, and any timelines you have in mind."
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
            Something went wrong sending your inquiry. Please try again.
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
            Sending inquiry&hellip;
          </>
        ) : (
          <>
            Send Project Inquiry
            <Send size={15} className="transition-transform duration-300 ease-premium group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}
