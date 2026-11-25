import { motion } from 'framer-motion'
export default function Section({ id, title, accent, sub, children }) {
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .6 }}>
      <h2>{title} <span>{accent}</span></h2>
      {sub && <p className="sub">{sub}</p>}
      {children}
    </motion.section>
  )
}
