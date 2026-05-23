import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Technologies and tools I use to bring ideas to life.</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -5 }}
            className="premium-glass p-8 rounded-2xl group transition-all duration-300 hover:border-cyan-500/50"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700/50 font-medium text-sm group-hover:bg-slate-800 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
