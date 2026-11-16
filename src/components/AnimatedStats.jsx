import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

function AnimatedStat({ stat }) {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState("")
  const ref = useRef(null)
  const numeric = stat.match(/^(\d+)(.*)$/)

  useEffect(() => {
    if (reducedMotion) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.8 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return undefined
    if (!visible) return undefined
    if (!numeric) return undefined
    const target = Number(numeric[1])
    let current = 0
    const interval = window.setInterval(() => {
      current += 1
      setValue(`${current}${numeric[2]}`)
      if (current >= target) window.clearInterval(interval)
    }, 120)
    return () => window.clearInterval(interval)
  }, [numeric, reducedMotion, stat, visible])

  const displayValue = reducedMotion || (visible && !numeric) ? stat : value

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3">
      <div className="font-display text-xl font-bold text-white">{displayValue}</div>
    </div>
  )
}

export default function AnimatedStats({ highlights }) {
  return highlights.map(([stat, label]) => (
    <div key={label} className="text-center">
      <AnimatedStat stat={stat} />
      <div className="mt-1 text-[11px] tracking-wide text-slate-500 uppercase">{label}</div>
    </div>
  ))
}
