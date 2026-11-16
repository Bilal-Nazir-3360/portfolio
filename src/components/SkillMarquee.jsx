import { useReducedMotion } from "framer-motion"

function SkillRow({ items, reverse = false }) {
  return (
    <div className="skill-marquee__window">
      <div className={`skill-marquee__track ${reverse ? "skill-marquee__track--reverse" : ""}`}>
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="skill-marquee__pill"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillMarquee({ groups }) {
  const shouldReduceMotion = useReducedMotion()
  const rows = groups.flatMap((group) => group.items)
  const secondRow = [...rows].reverse()

  return (
    <div className={shouldReduceMotion ? "skill-marquee skill-marquee--reduced" : "skill-marquee"}>
      <SkillRow items={rows} />
      <SkillRow items={secondRow} reverse />
    </div>
  )
}
