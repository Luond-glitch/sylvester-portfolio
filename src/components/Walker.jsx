import { useEffect } from 'react'
import { initWalker } from '../lib/walker'
export default function Walker() {
  useEffect(() => initWalker(), [])
  return (<>
    <div id="wk" aria-hidden="true"><div id="wkin"><div className="bench" /><div className="wp lgL" /><div className="wp lgR" /><div className="wp up" /></div><div id="bub" /></div>
    <button className="ic" id="wkt" aria-label="Show or hide avatar">🚶</button>
  </>)
}
