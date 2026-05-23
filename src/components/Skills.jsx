import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            className="glass px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-cyan-50 border border-cyan-500/30 shadow-[0_4px_20px_rgba(0,229,255,0.1)] cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
