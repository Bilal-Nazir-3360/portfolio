import { motion, useReducedMotion } from "framer-motion"

export default function ResearchMetrics({ outcomes }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <ul className="relative mt-6 grid gap-3 sm:grid-cols-3">
      {outcomes.map((item, index) => (
        <motion.li
          key={item}
          className="research-metric"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.1 }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  )
}
