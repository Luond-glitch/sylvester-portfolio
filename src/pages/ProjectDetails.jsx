import { Link, useParams } from 'react-router-dom'
import { projects, caseStudyOutline } from '../data/projects'
import NotFound from './NotFound'
export default function ProjectDetails() {
  const p = projects.find(x => x.id === useParams().id)
  if (!p) return <NotFound />
  return (
    <section><Link className="l" to="/">← Back</Link>
      <h2 style={{ marginTop: 16 }}>{p.name} <span>Case study</span></h2>
      <p className="sub">{p.text}</p>
      {p.url && <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">Open live project</a>}
      <div className="grid" style={{ marginTop: 24 }}>{caseStudyOutline.map((t, i) => <div className="card" key={t}><h3>{i + 1}. {t}</h3><p>To be completed from verified project details.</p></div>)}</div>
    </section>)
}
