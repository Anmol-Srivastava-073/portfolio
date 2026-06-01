import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-12 gap-12 items-center"
      >
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6"></div>
          <img
            src="/photos/anmol.jpeg"
            className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-lg grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            alt="Anmol Srivastava"
          />
        </div>

        <div className="md:col-span-7 glass-card p-10">
          <h2 className="text-4xl font-black text-textMain mb-6">
            Building Logic & <span className="text-gradient">Experiences</span>
          </h2>

          <p className="text-lg text-textMuted leading-relaxed mb-6">
            I’m a developer who thrives at the intersection of complex problem-solving and clean user interfaces. Whether I'm tackling multivariable calculus and data structures or designing seamless Progressive Web Apps like MUJ Navigator, I believe in building systems that are both robust and intuitive.
          </p>
          
          <p className="text-lg text-textMuted leading-relaxed">
            Recently, my focus has been on integrating Large Language Models into practical applications, such as migrating clinical history collection tools to the Claude API for improved accuracy. My goal is always to engineer products that are visually impressive and technically sound.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
