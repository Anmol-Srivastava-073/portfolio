import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-border">
      <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Experience</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {experience.map((item, index) => (
          <div key={index} className="bg-surface border border-border rounded-lg p-6 flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 rounded-md object-cover grayscale"
            />
            <div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-muted mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
