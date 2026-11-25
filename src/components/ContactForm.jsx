import { useState } from 'react'
import { send } from '../lib/send'
export default function ContactForm() {
  const [f, setF] = useState({ n: '', e: '', s: '', m: '' }), [err, setErr] = useState(''), [ok, setOk] = useState('')
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    if (!f.n.trim() || !/^\S+@\S+\.\S+$/.test(f.e) || !f.s.trim() || !f.m.trim()) return setErr('Please complete all fields with a valid email.')
    setErr('')
    try { const r = await send(f.s, `${f.m}\n\n${f.n} (${f.e})`, { name: f.n, email: f.e }); setOk(r === 'sent' ? 'Message sent. Thank you!' : 'Your email app should open to send the message.') } catch { setErr('Could not send. Please email me directly.') }
  }
  return (
    <form onSubmit={submit} noValidate>
      <input placeholder="Name" value={f.n} onChange={set('n')} /><input type="email" placeholder="Email" value={f.e} onChange={set('e')} />
      <input placeholder="Subject" value={f.s} onChange={set('s')} /><textarea rows="4" placeholder="Message" value={f.m} onChange={set('m')} />
      <span className="err">{err}</span><span style={{ color: 'var(--teal)' }}>{ok}</span>
      <button className="btn" type="submit">Send message</button>
    </form>)
}
