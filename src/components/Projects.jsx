import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-4 sketch-border shadow-sketch group relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="border-2 border-ink overflow-hidden h-56 bg-white">
              <img 
                src={project.image} 
                className="w-full h-full object-cover manga-image" 
                alt={project.title}
              />
            </div>

            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-manga font-black text-2xl uppercase mb-4 text-ink">{project.title}</h3>
                <p className="font-handwritten text-2xl text-ink/80 mb-6">
                  {project.desc}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="self-start sketch-border-alt bg-markerRed text-white px-6 py-2 font-bold uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="sketch-border bg-markerBlue text-white px-10 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects
