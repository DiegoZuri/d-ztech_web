export interface ContactFormValues {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(
  values: ContactFormValues,
  t: (key: string) => string,
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = t('contactForm.errors.nameRequired')
  } else if (values.name.trim().length < 2) {
    errors.name = t('contactForm.errors.nameShort')
  }

  if (!values.email.trim()) {
    errors.email = t('contactForm.errors.emailRequired')
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = t('contactForm.errors.emailInvalid')
  }

  if (values.phone.trim() && !/^[+()\-\s\d]{7,}$/.test(values.phone.trim())) {
    errors.phone = t('contactForm.errors.phoneInvalid')
  }

  if (!values.projectType) {
    errors.projectType = t('contactForm.errors.projectTypeRequired')
  }

  if (!values.message.trim()) {
    errors.message = t('contactForm.errors.messageRequired')
  } else if (values.message.trim().length < 20) {
    errors.message = t('contactForm.errors.messageShort')
  }

  return errors
}
