import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { ArrowUpRight } from 'lucide-react'

function Projects() {
  const [showAll, setShowAll] = useState(false)
  
  // Show 2 projects initially (to make them look massive), then all when expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
      >
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
          SELECTED <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            WORKS.
          </span>
        </h2>
        <p className="text-slate-400 max-w-sm text-lg md:text-xl font-light text-right">
          A showcase of engineering, design, and interactive web experiences.
        </p>
      </motion.div>

      <motion.div 
        layout 
        className="grid md:grid-cols-2 gap-10 md:gap-16"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={project.title}
              className={`group relative flex flex-col ${index % 2 !== 0 && !showAll ? 'md:mt-32' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                />
                
                {/* Floating View Button on Hover */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-colors duration-300">
                    View
                  </div>
                </a>
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <ArrowUpRight size={32} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > 2 && (
        <motion.div layout className="mt-20 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-10 py-5 rounded-full overflow-hidden border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-white/50 transition-colors"
          >
            <span className="relative z-10">{showAll ? 'Show Less' : 'Explore All Projects'}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              {showAll ? 'Show Less' : 'Explore All Projects'}
            </span>
          </button>
        </motion.div>
      )}
    </section>
  )
}

export default Projects
