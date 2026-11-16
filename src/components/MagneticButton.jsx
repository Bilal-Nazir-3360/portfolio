import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function MagneticButton({ as = "a", children, ...props }) {
  const reducedMotion = useReducedMotion()
  const [desktop, setDesktop] = useState(false)
  const x = useSpring(useMotionValue(0), { stiffness: 280, damping: 22 })
  const y = useSpring(useMotionValue(0), { stiffness: 280, damping: 22 })
  const MotionElement = motion[as]

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setDesktop(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  const handlePointerMove = (event) => {
    if (!desktop || reducedMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.16)
    y.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.16)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionElement
      {...props}
      className={`${props.className || ""} magnetic-button`}
      style={{ ...props.style, x: desktop && !reducedMotion ? x : 0, y: desktop && !reducedMotion ? y : 0 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {children}
    </MotionElement>
  )
}
