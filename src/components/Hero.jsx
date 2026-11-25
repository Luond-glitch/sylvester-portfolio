import { useEffect, useState } from 'react'
import { site, words } from '../data/site'
export default function Hero() {
  const [i, setI] = useState(0), [fade, setFade] = useState(false)
  useEffect(() => {
    const t = setInterval(() => { setFade(true); setTimeout(() => { setI(v => (v + 1) % words.length); setFade(false) }, 400) }, 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="home"><div id="hero">
      <div>
        <div className="eye">OMONDI O SYLVESTER · LUONDIA</div>
        <h1>Where Technology Meets Sustainability, Innovation and Impact.</h1>
        <div id="rot" key={i} className={fade ? 'f' : 'a'}>{words[i]}</div>
        <p className="sub">Building technology-driven solutions for a sustainable, inclusive and digitally empowered world.</p>
        <div className="row">
          <a className="btn" href="/#projects">Explore My Work</a>
          {site.cv ? <a className="btn o" href={site.cv} download>Download CV</a> : <button className="btn o" onClick={() => alert('CV will be available here once it is supplied.')}>Download CV</button>}
          <a className="btn o" href="/#rate">★ Rate Me</a>
        </div>
      </div>
      <div className="ph"><div id="slot"><div className="hf" /></div></div>
    </div></section>)
}
