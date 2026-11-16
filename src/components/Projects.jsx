import { AnimatePresence, motion } from "framer-motion"
import { useMemo, useState } from "react"
import { projects } from "../data"
import Reveal from "./Reveal"
import ProjectCard from "./ProjectCard"
import ProjectFilters from "./ProjectFilters"
import ProjectModal from "./ProjectModal"
import SectionHeading from "./SectionHeading"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category?.includes(activeCategory)),
    [activeCategory],
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="03 — Projects"
          title="Security tools, SaaS platforms, and generative models."
        />
      </Reveal>
      <ProjectFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}
