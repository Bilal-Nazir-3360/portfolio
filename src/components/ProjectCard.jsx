import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"
import { IconExternal, IconGitHub } from "./Icons"

const profileGithub = "https://github.com/Bilal-Nazir-3360"

export default function ProjectCard({ project, index, onOpen }) {
  const shouldReduceMotion = useReducedMotion()
  const [desktopPointer, setDesktopPointer] = useState(false)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 24 })
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%" })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (hover: hover)")
    const updatePointerMode = () => setDesktopPointer(mediaQuery.matches)
    updatePointerMode()
    mediaQuery.addEventListener("change", updatePointerMode)
    return () => mediaQuery.removeEventListener("change", updatePointerMode)
  }, [])

  const handlePointerMove = (event) => {
    if (shouldReduceMotion || !desktopPointer) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    rotateX.set((y / bounds.height - 0.5) * -7)
    rotateY.set((x / bounds.width - 0.5) * 7)
    setSpotlight({ x: `${x}px`, y: `${y}px` })
  }

  const resetCard = () => {
    rotateX.set(0)
    rotateY.set(0)
    setSpotlight({ x: "50%", y: "50%" })
  }

  const openFromKeyboard = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onOpen()
    }
  }

  return (
    <motion.article
      layout
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.name}`}
      className="project-card group flex h-full flex-col rounded-3xl p-px outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.06 }}
      style={{ rotateX: shouldReduceMotion ? 0 : rotateX, rotateY: shouldReduceMotion ? 0 : rotateY }}
      onClick={onOpen}
      onKeyDown={openFromKeyboard}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
    >
      <div
        className="project-card__surface flex h-full flex-col rounded-[calc(1.5rem-1px)] p-6"
        style={{ "--spotlight-x": spotlight.x, "--spotlight-y": spotlight.y }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
            {project.subtitle ? (
              <p className="mt-1 text-xs tracking-wide text-teal-200/80 uppercase">{project.subtitle}</p>
            ) : null}
          </div>
          {project.github && project.github !== profileGithub ? (
            <IconGitHub className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-teal-300" />
          ) : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        {project.github && project.github !== profileGithub ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-slate-200 transition hover:text-teal-300"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            View on GitHub
            <IconExternal />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
