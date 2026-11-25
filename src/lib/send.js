import { site } from '../data/site'
// Posts JSON to VITE_FORM_ENDPOINT if set, otherwise opens the visitor's email app.
export async function send(subject, body, fields = {}) {
  if (site.endpoint) {
    const r = await fetch(site.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ subject, message: body, ...fields }) })
    if (!r.ok) throw new Error('Request failed')
    return 'sent'
  }
  location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mailto'
}
