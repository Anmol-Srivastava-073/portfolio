import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const cardVariants = {
  rest: { borderColor: "#262626" },
  hover: { borderColor: "#6366f1" }
}

const listContainer = {
  rest: {},
  hover: { transition: { staggerChildren: 0.05 } }
}

const listItem = {
  rest: { opacity: 0.6, x: 0, color: "#a3a3a3" },
  hover: { opacity: 1, x: 5, color: "#f5f5f5", transition: { type: "spring", stiffness: 300 } }
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-accent mb-2 tracking-widest text-sm">03. // TECH_ARSENAL</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain">Technical Stack</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              className="dev-card bg-[#0a0a0a] cursor-default relative overflow-hidden"
            >
              {/* Scanning line effect on hover */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[1px] bg-accent/50 shadow-[0_0_10px_#6366f1]"
                variants={{
                  rest: { top: "-10%", opacity: 0 },
                  hover: { top: "110%", opacity: 1, transition: { duration: 1.5, repeat: Infinity, ease: "linear" } }
                }}
              />

              <h4 className="font-mono text-sm text-textMain mb-6 pb-4 border-b border-border tracking-widest flex items-center justify-between">
                {skillGroup.category}
                <span className="text-accent text-xs opacity-50">[{skillGroup.items.length}]</span>
              </h4>
              
              <motion.ul variants={listContainer} className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    variants={listItem}
                    className="font-mono text-sm flex items-center gap-3"
                  >
                    <span className="text-border inline-block w-2">-</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
