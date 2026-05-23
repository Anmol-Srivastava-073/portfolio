import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="glass px-8 py-4 rounded-full hover:scale-110 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
