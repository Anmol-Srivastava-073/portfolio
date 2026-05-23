import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">

      <SectionTitle
        title="Featured Projects"
        subtitle="A selection of projects focused on AI, full stack development, cloud, and interactive experiences."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border border-white/10 group"
          >

            <div className="overflow-hidden">
              <img
                src={project.image}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-7">

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                className="gradient px-6 py-3 rounded-full inline-block text-black font-bold"
              >
                Live Demo
              </motion.a>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  )
}

export default Projects
