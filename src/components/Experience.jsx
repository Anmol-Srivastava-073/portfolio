import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {experience.map((item, index) => (
          <div key={index} className="glass rounded-3xl p-8 text-center">
            <img
              src={item.image}
              className="w-24 h-24 rounded-full mx-auto mb-6"
            />

            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-cyan-400 mt-3">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
