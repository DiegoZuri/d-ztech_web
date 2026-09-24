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

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please tell us your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name looks too short.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please add an email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'That email address doesn’t look valid.'
  }

  if (values.phone.trim() && !/^[+()\-\s\d]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'That phone number doesn’t look valid.'
  }

  if (!values.projectType) {
    errors.projectType = 'Select the type of project.'
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us a little about what you need.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please add a bit more detail (20+ characters).'
  }

  return errors
}
