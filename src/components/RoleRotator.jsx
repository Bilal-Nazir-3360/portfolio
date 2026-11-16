import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const roles = ["Full Stack Developer", "AI/ML Engineer", "Security Researcher"]

export default function RoleRotator() {
  const shouldReduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) return undefined

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2500)

    return () => window.clearInterval(interval)
  }, [shouldReduceMotion])

  return (
    <div className="relative mt-5 h-7 overflow-hidden text-base font-medium text-teal-200 sm:text-lg">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[roleIndex]}
          className="absolute inset-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
        >
          {roles[roleIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
