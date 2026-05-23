import { education } from '../data/portfolioData'

function Education() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Education</h2>

      <div className="space-y-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center"
          >
            <img
              src={item.image}
              className="w-24 h-24 rounded-full object-cover"
            />

            <div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-cyan-400 mt-2">{item.location}</p>
              <p className="text-gray-300 mt-3">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
