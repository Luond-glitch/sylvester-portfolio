import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Walker from './components/Walker'
import { initFx } from './lib/walker'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NodesCanvas from './components/NodesCanvas'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'
import logo from './assets/logo.jpg'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('th') || 'dark')
  const [showTop, setShowTop] = useState(false)
  const [loading, setLoading] = useState(true)
  const loc = useLocation()
  useEffect(() => { if (!loading) { const t = setTimeout(initFx, 80); return () => clearTimeout(t) } }, [loc.pathname, loading])
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('th', theme) }, [theme])
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    const f = () => setShowTop(scrollY > 600)
    addEventListener('scroll', f)
    return () => { clearTimeout(t); removeEventListener('scroll', f) }
  }, [])
  if (loading) return <div style={{ display: 'grid', placeItems: 'center', height: '100vh', background: '#0a1628' }}><img src={logo} alt="LUONDIA" width="140" style={{ borderRadius: '50%', animation: 'fd 1s infinite alternate' }} /></div>
  return (
    <MotionConfig reducedMotion="user">
      <div id="bg" /><div id="logo-bg"><img src={logo} alt="" /></div><NodesCanvas />
      <Navbar theme={theme} toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Walker />
      {showTop && <button className="btn" id="top" style={{ display: 'block' }} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}
    </MotionConfig>
  )
}
