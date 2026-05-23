import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-5 gap-12 items-start"
      >
        <div className="md:col-span-2">
          <img
            src="/photos/anmol.jpeg"
            alt="Anmol Srivastava"
            className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-border"
          />
        </div>

        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">About Me</h2>

          <div className="space-y-4 text-muted text-base leading-relaxed">
            <p>
              Hi, I’m Anmol Srivastava — a passionate developer with strong foundations
              in programming, problem-solving, and full stack development.
            </p>
            <p>
              I enjoy building modern projects using Java, JavaScript, React, Python,
              MySQL, and cloud technologies. Currently pursuing my BTech in Computer Science at Manipal University Jaipur.
            </p>
            <p>
              My goal is to create products that are technically sound and genuinely useful, focusing on clean code and intuitive user experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
