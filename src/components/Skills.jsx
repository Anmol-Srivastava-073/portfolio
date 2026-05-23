import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Skills</h2>

      <div className="flex flex-col gap-10">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 sketch-border shadow-sketch relative"
          >
            <h3 className="font-marker text-3xl mb-6 text-markerBlue border-b-4 border-dashed border-ink/20 pb-2 inline-block">
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {skillGroup.items.map((item, i) => (
                <div
                  key={i}
                  className="font-handwritten text-2xl font-bold bg-paper text-ink border-2 border-ink px-4 py-2 shadow-sketch hover:bg-markerYellow transition-colors cursor-default"
                  style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
