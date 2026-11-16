import { motion, useReducedMotion } from "framer-motion"

export default function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.7, ease: "easeOut", delay: delay / 1000 }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
