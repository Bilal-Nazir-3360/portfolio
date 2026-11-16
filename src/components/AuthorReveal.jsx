import { motion, useReducedMotion } from "framer-motion"

export default function AuthorReveal({ authors }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <p className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-7 text-slate-200">
      {authors.map((author, index) => (
        <motion.span
          key={author}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, delay: index * 0.08 }}
        >
          {author}
          {index < authors.length - 1 ? " •" : ""}
        </motion.span>
      ))}
    </p>
  )
}
