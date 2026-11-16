import { useEffect, useRef, useState } from "react"

export default function DeferredSection({ loader }) {
  const containerRef = useRef(null)
  const [Component, setComponent] = useState(null)
  const [loadError, setLoadError] = useState(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element || Component) return undefined

    let active = true
    const load = () => {
      loader()
        .then((module) => {
          if (active) setComponent(() => module.default)
        })
        .catch((error) => {
          console.error("Deferred section failed to load:", error)
          if (active) setLoadError(error)
        })
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        load()
      }
    }, { rootMargin: "320px 0px" })

    observer.observe(element)
    return () => {
      active = false
      observer.disconnect()
    }
  }, [Component, loader])

  return (
    <div ref={containerRef}>
      {Component ? <Component /> : null}
      {loadError ? <p className="sr-only">Section unavailable.</p> : null}
    </div>
  )
}
