import { motion, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function FactValue({ value, isVisible, shouldReduceMotion }) {
  const numericValue = Number(value)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible || shouldReduceMotion || !Number.isFinite(numericValue)) return

    let frameId
    const startTime = performance.now()
    const duration = 900
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setDisplayValue(Math.round(progress * numericValue))
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible, numericValue, shouldReduceMotion, value])

  return shouldReduceMotion || !Number.isFinite(numericValue) ? value : displayValue
}

export default function AnimatedFactTiles({ facts }) {
  const containerRef = useRef(null)
  const isVisible = useInView(containerRef, { once: true, amount: 0.35 })
  const shouldReduceMotion = useReducedMotion()

  return (
    <div ref={containerRef} className="grid gap-3 sm:grid-cols-3">
      {facts.map((fact) => (
        <motion.article
          key={fact.label}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: fact.delay }}
        >
          <p className="font-display text-xl font-bold text-white">
            <FactValue value={fact.value} isVisible={isVisible} shouldReduceMotion={shouldReduceMotion} />
          </p>
          <p className="mt-1 text-xs tracking-wide text-slate-400">{fact.label}</p>
        </motion.article>
      ))}
    </div>
  )
}
