import { education } from '../data/portfolioData'

function Education() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-border">
      <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Education</h2>

      <div className="space-y-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-surface border border-border p-6 rounded-lg flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-md object-cover grayscale"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{item.location}</p>
              <p className="text-sm text-muted mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
