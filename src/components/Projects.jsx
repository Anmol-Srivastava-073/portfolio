import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { ExternalLink, Github } from 'lucide-react'

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">A selection of my best work in software development.</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="group relative rounded-3xl premium-glass overflow-hidden hover:border-slate-500 transition-colors duration-500"
          >
            {/* Image Container with Zoom effect */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-full transition-colors"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
