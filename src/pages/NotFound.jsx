import { Link } from 'react-router-dom'
export default function NotFound() {
  return <section style={{ textAlign: 'center', minHeight: '60vh' }}><h2>404 · <span>Page not found</span></h2><p className="sub" style={{ margin: '0 auto 20px' }}>That page does not exist.</p><Link className="btn" to="/">Back to home</Link></section>
}
