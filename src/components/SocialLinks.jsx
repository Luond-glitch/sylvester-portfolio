import { site } from '../data/site'
export default function SocialLinks() {
  const s = Object.entries(site.socials).filter(([, v]) => v)
  if (!s.length) return <p style={{ opacity: .7 }}>LinkedIn, GitHub, Facebook, X: links to be supplied in src/data/site.js.</p>
  return <div className="row">{s.map(([k, v]) => <a key={k} className="btn o" href={v} target="_blank" rel="noopener noreferrer">{k}</a>)}</div>
}
