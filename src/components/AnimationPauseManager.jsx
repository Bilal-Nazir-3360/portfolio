import { useEffect } from "react"

export default function AnimationPauseManager() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-infinite-animation]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("is-offscreen", !entry.isIntersecting))
      },
      { threshold: 0 },
    )
    const updateVisibility = () => document.body.toggleAttribute("data-page-hidden", document.hidden)

    animatedElements.forEach((element) => observer.observe(element))
    document.addEventListener("visibilitychange", updateVisibility)
    updateVisibility()

    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", updateVisibility)
    }
  }, [])

  return null
}
