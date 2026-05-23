import { skills } from '../data/data'

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-7 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
