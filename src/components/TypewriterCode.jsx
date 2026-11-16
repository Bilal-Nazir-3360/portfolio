import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { profile } from "../data"

const code = `{
  "name": "${profile.name}",
  "stack": ["MERN", "AI", "Security"],
  "education": "FAST NUCES 26 — CS",
  "location": "${profile.location}"
}`

export default function TypewriterCode() {
  const reducedMotion = useReducedMotion()
  const containerRef = useRef(null)
  const [text, setText] = useState(reducedMotion ? code : "")
  const started = useRef(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return undefined
    if (reducedMotion) return undefined

    const typeCode = () => {
      if (started.current) return
      started.current = true
      let character = 0
      const interval = window.setInterval(() => {
        character += 1
        setText(code.slice(0, character))
        if (character >= code.length) window.clearInterval(interval)
      }, 18)
      return () => window.clearInterval(interval)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) typeCode()
    }, { threshold: 0.35 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <pre ref={containerRef} className="overflow-x-auto font-mono text-[12px] leading-7 text-slate-300">
      {reducedMotion ? code : text}
    </pre>
  )
}
