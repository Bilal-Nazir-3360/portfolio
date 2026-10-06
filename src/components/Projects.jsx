import { projects } from "../data"
import { IconExternal, IconGitHub } from "./Icons"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="03 — Projects"
          title="Security tools, SaaS platforms, and generative models."
        />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 60}>
            <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0e131c] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-300/35 hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
                  {project.subtitle ? (
                    <p className="mt-1 text-xs tracking-wide text-teal-200/70 uppercase">{project.subtitle}</p>
                  ) : null}
                </div>
                {project.github ? (
                  <IconGitHub className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-teal-300" />
                ) : null}
              </div>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] text-teal-200/80">
                    {tag}
                  </span>
                ))}
              </div>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-teal-300"
                >
                  View on GitHub
                  <IconExternal />
                </a>
              ) : (
                <p className="mt-5 text-xs text-slate-600">Source available on request</p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
