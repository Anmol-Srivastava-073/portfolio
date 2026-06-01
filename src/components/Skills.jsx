import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-textMain flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {skillGroup.category}
            </h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  variants={item}
                  key={i}
                  className="px-4 py-2 bg-white text-textMuted border border-primary/10 rounded-lg text-sm font-medium hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all cursor-default shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
