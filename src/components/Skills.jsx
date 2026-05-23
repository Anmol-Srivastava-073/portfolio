import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-handwritten text-3xl font-bold bg-white text-ink border-2 border-ink px-8 py-3 shadow-sketch hover:bg-markerYellow transition-colors cursor-default"
            style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
