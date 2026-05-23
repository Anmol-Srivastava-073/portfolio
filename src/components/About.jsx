import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-14 items-center"
      >
        <div className="bg-white p-4 pb-12 sketch-border shadow-sketch relative rotate-2">
          <div className="washi-tape bg-markerBlue/40 w-40"></div>
          <div className="border-2 border-ink overflow-hidden">
            <img
              src="/photos/anmol.jpeg"
              className="w-full h-full object-cover manga-image"
              alt="Anmol Srivastava"
            />
          </div>
        </div>

        <div className="bg-white p-8 sketch-border-alt shadow-sketch relative -rotate-1">
          <h2 className="font-marker text-5xl text-ink mb-8">About Me</h2>

          <p className="font-handwritten text-3xl text-ink leading-relaxed">
            Hi, I’m Anmol Srivastava — a passionate developer with strong foundations
            in programming, problem-solving, full stack development, and open source.
            <br /><br />
            I enjoy building modern projects using Java, JavaScript, React, Python,
            MySQL, and cloud technologies.
            <br /><br />
            My goal is to create products that are visually impressive, technically
            strong, and genuinely useful.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
