import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-14 items-center"
      >
        <img
          src="/photos/anmol.jpeg"
          className="rounded-3xl shadow-2xl border border-cyan-400"
        />

        <div>
          <h2 className="text-5xl font-bold mb-8">About Me</h2>

          <p className="text-gray-300 leading-9 text-lg">
            Hi, I’m Anmol Srivastava — a passionate developer with strong foundations
            in programming, problem-solving, full stack development, and open source.
            
            I enjoy building modern projects using Java, JavaScript, React, Python,
            MySQL, and cloud technologies.

            My goal is to create products that are visually impressive, technically
            strong, and genuinely useful.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
