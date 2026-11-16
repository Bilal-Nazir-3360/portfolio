import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export default function CursorGlow() {
  const shouldReduceMotion = useReducedMotion()
  const [position, setPosition] = useState(null)
  const [hasFinePointer, setHasFinePointer] = useState(false)

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const updatePointerSupport = () => setHasFinePointer(pointerQuery.matches)

    updatePointerSupport()
    pointerQuery.addEventListener("change", updatePointerSupport)
    return () => pointerQuery.removeEventListener("change", updatePointerSupport)
  }, [])

  useEffect(() => {
    if (!hasFinePointer || shouldReduceMotion) return undefined

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [hasFinePointer, shouldReduceMotion])

  if (!hasFinePointer || shouldReduceMotion || !position) return null

  return (
    <div
      className="cursor-glow"
      aria-hidden="true"
      style={{ left: position.x, top: position.y }}
    />
  )
}
