import { Link } from 'react-router-dom'
export default function ProjectCard({ p }) {
  return (
    <div className="card">
      <span className="tag">{p.role}</span><span className="tag">{p.category}</span>
      <h3>{p.name}</h3><p>{p.text}</p>
      {p.stack?.length > 0 && <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>}
      <div className="row" style={{ marginTop: 10 }}>
        {p.url && <a className="l" href={p.url} target="_blank" rel="noopener noreferrer">View project →</a>}
        <Link className="l" to={`/projects/${p.id}`}>Case study →</Link>
      </div>
    </div>
  )
}
