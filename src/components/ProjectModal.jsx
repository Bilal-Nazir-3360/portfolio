import { useEffect, useRef } from "react"
import { IconExternal, IconGitHub } from "./Icons"

const profileGithub = "https://github.com/Bilal-Nazir-3360"

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    previousFocusRef.current = document.activeElement
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
        return
      }

      if (event.key !== "Tab") return
      const dialog = event.currentTarget.querySelector("[role='dialog']")
      const focusable = dialog?.querySelectorAll("button, a[href]")
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocusRef.current?.focus()
    }
  }, [onClose])

  return (
    <div className="project-modal__backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-teal-300 uppercase">Project details</p>
            <h2 id="project-modal-title" className="font-display mt-2 text-2xl font-bold text-white">
              {project.name}
            </h2>
            <p className="mt-1 text-sm text-teal-200/80">{project.subtitle}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close project details"
            className="rounded-full border border-white/15 px-3 py-1 text-xl leading-none text-slate-300 hover:border-teal-300/50 hover:text-white"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
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
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 via-violet-400 to-amber-300 px-4 py-2 text-sm font-semibold text-[#07090f]"
          >
            <IconGitHub className="h-4 w-4" />
            View on GitHub
            <IconExternal />
          </a>
        ) : null}
      </div>
    </div>
  )
}
