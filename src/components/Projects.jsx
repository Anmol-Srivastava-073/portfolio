import { projects } from '../data/data'

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-3 transition"
          >
            <img
              src={project.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-300 leading-7">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-6 text-cyan-400 font-semibold"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
