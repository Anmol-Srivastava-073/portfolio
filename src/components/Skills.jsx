import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto border-t border-border">
      <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Technologies & Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-4 py-2 text-sm text-muted border border-border rounded-md hover:text-white hover:border-neutral-500 transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
