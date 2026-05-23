import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { ExternalLink } from 'lucide-react'

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="glass rounded-3xl overflow-hidden border border-white/10 group shadow-lg"
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-80" />
            </div>

            <div className="p-6 relative">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6 h-14">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="gradient px-6 py-3 rounded-full inline-flex items-center gap-2 text-black font-semibold hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-shadow"
              >
                View Project <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
