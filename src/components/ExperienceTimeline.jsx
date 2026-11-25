export default function ExperienceTimeline({ items }) {
  return (
    <div className="tl">{items.map(e => (
      <div className="card" key={e.title}>
        {e.tag && <span className="tag">{e.tag}</span>}<h3>{e.title}</h3><p>{e.text}</p>
        {e.link && <a className="l" href={e.link} target="_blank" rel="noopener noreferrer">{e.linkText} →</a>}
      </div>))}</div>
  )
}
