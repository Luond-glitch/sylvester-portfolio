import { useRef, useState } from 'react'
import { send } from '../lib/send'
const MSG = { 1: 'Sorry it fell short. What should I improve?', 2: 'Thanks. What could be better?', 3: 'Thanks. What would make it great?', 4: 'Great. What did you like, and what could be better?', 5: 'Wonderful. What stood out for you?' }
const Stars = ({ n, onPick }) => (
  <div className="stars" role="group" aria-label="Rating" style={onPick ? undefined : { pointerEvents: 'none' }}>
    {[1, 2, 3, 4, 5].map(i => <button key={i} type="button" className={i <= n ? 'on' : ''} aria-label={`${i} star${i > 1 ? 's' : ''}`} onClick={() => onPick?.(i)}>★</button>)}
  </div>)
export default function Rating() {
  const dlg = useRef()
  const [cur, setCur] = useState(() => +localStorage.getItem('rt') || 0)
  const [sel, setSel] = useState(0)
  const [name, setName] = useState(''), [msg, setMsg] = useState(''), [err, setErr] = useState('')
  const pick = n => { setSel(n); setErr(''); dlg.current.showModal() }
  const submit = async () => {
    if (msg.trim().length < 3) return setErr('Please write a short comment.')
    const nm = name.trim() || 'Anonymous'
    try { await send(`Portfolio rating: ${sel}/5 stars`, `Rating: ${sel}/5\nFrom: ${nm}\n\n${msg}`, { rating: sel, name: nm }) } catch { return setErr('Could not send. Please try again.') }
    localStorage.setItem('rt', sel); setCur(sel); setMsg(''); dlg.current.close()
  }
  return (<>
    <div className="card" style={{ textAlign: 'center' }}>
      <Stars n={cur} onPick={pick} />
      <p>{cur ? `Your rating: ${cur} of 5. Thank you!` : 'Select a rating.'}</p>
    </div>
    <dialog ref={dlg}>
      <h3>You rated {sel} star{sel > 1 ? 's' : ''}</h3><p style={{ color: 'var(--mut)' }}>{MSG[sel]}</p>
      <Stars n={sel} />
      <input placeholder="Your name (optional)" value={name} onChange={e => setName(e.target.value)} />
      <textarea rows="4" placeholder="Your feedback" value={msg} onChange={e => setMsg(e.target.value)} style={{ marginTop: 10 }} />
      <span className="err">{err}</span>
      <div className="row"><button className="btn" type="button" onClick={submit}>Submit feedback</button><button className="btn o" type="button" onClick={() => dlg.current.close()}>Cancel</button></div>
    </dialog>
  </>)
}
