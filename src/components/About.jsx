import { about, education, highlights, projects, profile, research } from "../data"
import AnimatedFactTiles from "./AnimatedFactTiles"
import BioTextReveal from "./BioTextReveal"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function About() {
  const facts = [
    { value: highlights[0][0] || projects.length, label: "Projects", delay: 0 },
    { value: research.status.includes("Under Review") ? 1 : 0, label: "Paper under review", delay: 0.1 },
    { value: education.years.replace(/\s?[–-]\s?/g, "-"), label: "FAST NUCES", delay: 0.2 },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="01 - ABOUT"
          title="Full-stack builder. Research-minded engineer."
          accentWords={["Full-stack", "Research-minded"]}
          animateKicker
        />
      </Reveal>
      <Reveal delay={80}>
        <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
          <div className="about-photo-ring relative mx-auto h-64 w-64 rounded-[2.5rem] p-1 sm:h-72 sm:w-72">
            <div className="relative h-full w-full overflow-hidden rounded-[2.3rem]">
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover object-top" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090f]/40 to-transparent" />
            </div>
          </div>
          <div className="space-y-5">
            <div className="about-bio-card rounded-3xl p-6 sm:p-8">
              <BioTextReveal text={about} />
            </div>
            <AnimatedFactTiles facts={facts} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
