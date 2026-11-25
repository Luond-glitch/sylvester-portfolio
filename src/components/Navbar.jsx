import { useState } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'
import { nav } from '../data/site'
import logo from '../assets/logo.jpg'
export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header><nav>
      <a className="b" href="/#home"><img src={logo} alt="LUONDIA logo" />LUONDIA</a>
      <ul className={open ? 'on' : ''}>{nav.map(([l, id]) => <li key={id}><a href={`/#${id}`} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>
      <a className="btn cta" href="/#contact">Let’s Connect</a>
      <button className="ic" onClick={toggle} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
      <button className="ic" id="burger" onClick={() => setOpen(!open)} aria-label="Menu"><Menu size={18} /></button>
    </nav></header>
  )
}
