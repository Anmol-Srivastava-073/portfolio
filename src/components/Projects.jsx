import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden hover:-translate-y-4 transition duration-500"
          >
            <img src={project.image} className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="gradient px-6 py-3 rounded-full inline-block text-black font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
