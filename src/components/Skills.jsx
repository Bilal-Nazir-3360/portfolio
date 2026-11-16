import { skillGroups } from "../data"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import SkillMarquee from "./SkillMarquee"

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="02 — Skills"
          title="MERN projects. Models in the loop."
          accentWords={["MERN", "Models"]}
          copy="Frontend, APIs, databases, and applied machine learning — the stack I use to ship products and research."
        />
      </Reveal>
      <Reveal delay={80}>
        <SkillMarquee groups={skillGroups} />
      </Reveal>
    </section>
  )
}
