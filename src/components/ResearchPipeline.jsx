import { motion, useReducedMotion } from "framer-motion"

const nodes = [
  { label: "GAN", caption: "adversarial traffic" },
  { label: "Transformer", caption: "sequence analysis" },
  { label: "RL", caption: "adaptive defense" },
]

function PipelineConnector({ reverse = false }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`research-pipeline__connector ${reverse ? "research-pipeline__connector--reverse" : ""}`}
      initial={shouldReduceMotion ? false : { scaleX: 0, scaleY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.65, ease: "easeOut" }}
    >
      <motion.span className="research-pipeline__dot" />
    </motion.div>
  )
}

export default function ResearchPipeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="research-pipeline" aria-label="NEXTGEN-IDS research pipeline">
      {nodes.map((node, index) => (
        <div key={node.label} className="research-pipeline__node-wrap">
          <motion.div
            className="research-pipeline__node"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.12 }}
          >
            <span className="font-display text-xl font-bold text-white">{node.label}</span>
            <span className="mt-1 text-xs text-slate-300">{node.caption}</span>
          </motion.div>
          {index < nodes.length - 1 ? <PipelineConnector reverse={index % 2 === 1} /> : null}
        </div>
      ))}
    </div>
  )
}
