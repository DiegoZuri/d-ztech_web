export interface ContactPayload {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: true }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY environment variable')
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New project inquiry from ${payload.name}`,
      from_name: 'D&Z Technologies website',
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      project_type: payload.projectType,
      budget: payload.budget,
      message: payload.message,
    }),
  })

  const result = await response.json()
  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'Failed to send message')
  }

  return { ok: true }
}
