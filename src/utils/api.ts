export interface ContactPayload {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

/**
 * Placeholder submission handler.
 * Replace this with a real request (fetch/axios) to your backend or form
 * provider once an endpoint exists — the calling form already awaits this
 * promise and handles success/error states.
 */
export async function submitContactForm(payload: ContactPayload): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 1100))

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[contact form] submission payload', payload)
  }

  return { ok: true }
}
