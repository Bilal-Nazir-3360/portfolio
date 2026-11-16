import { motion, useReducedMotion } from "framer-motion"

export default function BioTextReveal({ text }) {
  const shouldReduceMotion = useReducedMotion()
  const lines = text.match(/[^.!?]+[.!?]+/g) || [text]

  return (
    <motion.p
      className="text-base leading-8 text-slate-300"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
      }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={`${line}-${index}`}
          className="block"
          variants={{
            hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          {line.trim()}{" "}
        </motion.span>
      ))}
    </motion.p>
  )
}
