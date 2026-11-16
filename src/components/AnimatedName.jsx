import { motion } from "framer-motion"
import { profile } from "../data"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedName() {
  return (
    <motion.span
      className="block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span className="block" variants={wordVariants}>
        {profile.firstName}
      </motion.span>
      <motion.span
        className="hero-name-gradient block"
        variants={wordVariants}
      >
        {profile.lastName}
      </motion.span>
    </motion.span>
  )
}
