import { motion, useReducedMotion } from "framer-motion"

export default function ScrollIndicator() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.a
      href="#about"
      className="scroll-indicator"
      aria-label="Scroll to About"
      animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span />
    </motion.a>
  )
}
