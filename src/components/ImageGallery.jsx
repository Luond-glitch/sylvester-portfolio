import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
export default function ImageGallery({ items }) {
  const [i, setI] = useState(null)
  const go = d => setI(v => (v + d + items.length) % items.length)
  useEffect(() => {
    if (i === null) return
    const k = e => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1) }
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [i])
  return (<>
    <div className="gal">{items.map((it, n) => (
      <figure key={n} onClick={() => setI(n)}>
        <img loading="lazy" src={it.src} alt={it.alt} style={it.contain ? { objectFit: 'contain', background: '#fff' } : undefined} />
        <figcaption>{it.caption}</figcaption></figure>))}</div>
    {i !== null && (
      <div id="lb" className="on" onClick={() => setI(null)}>
        <button className="ic" style={{ top: 16, right: 16 }} aria-label="Close"><X size={18} /></button>
        <button className="ic" style={{ left: 12 }} aria-label="Previous" onClick={e => { e.stopPropagation(); go(-1) }}><ChevronLeft /></button>
        <button className="ic" style={{ right: 12 }} aria-label="Next" onClick={e => { e.stopPropagation(); go(1) }}><ChevronRight /></button>
        <AnimatePresence mode="wait"><motion.img key={i} src={items[i].src} alt={items[i].alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={e => e.stopPropagation()} /></AnimatePresence>
        <p>{items[i].caption}</p>
      </div>)}
  </>)
}
