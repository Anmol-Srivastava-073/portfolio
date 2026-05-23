import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { ArrowUpRight } from 'lucide-react'

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-border">
      <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Selected Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-surface border border-border rounded-lg overflow-hidden hover:border-neutral-600 transition-colors"
          >
            <div className="overflow-hidden h-48 border-b border-border">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <p className="text-sm text-muted leading-relaxed mt-2 flex-grow">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
