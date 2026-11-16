import { useReducedMotion } from "framer-motion"

export default function BackToTopButton() {
  const shouldReduceMotion = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-teal-300/50 hover:text-white"
    >
      Back to top
    </button>
  )
}
