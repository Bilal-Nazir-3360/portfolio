import { motion, useReducedMotion } from "framer-motion"
import { activities } from "../data"

export default function ActivityTimeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="activity-timeline">
      <motion.div
        aria-hidden="true"
        className="activity-timeline__line"
        initial={shouldReduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, ease: "easeOut" }}
      />
      <ul className="space-y-7">
        {activities.map((item, index) => (
          <motion.li
            key={item.title}
            className="activity-timeline__entry"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.12 }}
          >
            <motion.span
              aria-hidden="true"
              className="activity-timeline__dot"
              initial={shouldReduceMotion ? false : { scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, delay: index * 0.12 + 0.1 }}
            />
            <p className="font-mono text-xs text-teal-100 sm:pt-0.5">{item.year}</p>
            <div>
              <h3 className="font-medium text-white">{item.title}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-300">{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
