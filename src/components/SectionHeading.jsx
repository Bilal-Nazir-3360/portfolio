import { motion, useReducedMotion } from "framer-motion"

export default function SectionHeading({ kicker, title, copy, accentWords = [], animateKicker = false }) {
  const shouldReduceMotion = useReducedMotion()
  const titleWords = title.split(" ")

  return (
    <div className="mb-10 max-w-2xl">
      <div className="flex items-center gap-3">
        <p className="font-mono text-xs tracking-[0.22em] text-teal-300 uppercase">{kicker}</p>
        {animateKicker ? (
          <motion.span
            aria-hidden="true"
            className="h-px w-14 origin-left bg-gradient-to-r from-teal-300 to-violet-400"
            initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          />
        ) : null}
      </div>
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {titleWords.map((word, index) => {
          const cleanWord = word.replace(/[.,]/g, "")
          const isAccent = accentWords.includes(cleanWord)

          return (
            <span key={`${word}-${index}`} className={isAccent ? "hero-name-gradient" : undefined}>
              {word}
              {index < titleWords.length - 1 ? " " : ""}
            </span>
          )
        })}
      </h2>
      {copy ? <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{copy}</p> : null}
    </div>
  )
}
