import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card overflow-hidden group flex flex-col h-full"
          >
            <div className="overflow-hidden h-48 relative">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                alt={project.title}
              />
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-2xl mb-3 text-textMain">{project.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                
                {project.stack && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="text-primary font-semibold hover:text-secondary flex items-center gap-2 transition-colors w-fit">
                View Project &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button onClick={() => setShowAll(!showAll)} className="btn-outline">
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects
