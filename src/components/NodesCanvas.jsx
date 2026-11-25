import { useEffect, useRef } from 'react'
export default function NodesCanvas() {
  const ref = useRef()
  useEffect(() => {
    const cv = ref.current, cx = cv.getContext('2d'), mq = matchMedia('(prefers-reduced-motion: reduce)')
    const size = () => { cv.width = innerWidth; cv.height = innerHeight }; size(); addEventListener('resize', size)
    const P = Array.from({ length: 42 }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }))
    let raf
    const draw = () => {
      cx.clearRect(0, 0, cv.width, cv.height)
      P.forEach((p, i) => {
        if (!mq.matches) { p.x += p.vx; p.y += p.vy }
        if (p.x < 0 || p.x > cv.width) p.vx *= -1
        if (p.y < 0 || p.y > cv.height) p.vy *= -1
        cx.fillStyle = 'rgba(20,184,166,.6)'; cx.beginPath(); cx.arc(p.x, p.y, 1.8, 0, 7); cx.fill()
        for (let j = i + 1; j < P.length; j++) {
          const q = P[j], d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 130) { cx.strokeStyle = `rgba(47,140,255,${.25 - d / 560})`; cx.beginPath(); cx.moveTo(p.x, p.y); cx.lineTo(q.x, q.y); cx.stroke() }
        }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size) }
  }, [])
  return <canvas id="nodes" ref={ref} />
}
