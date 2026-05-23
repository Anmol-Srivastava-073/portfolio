import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          Anmol
          <span className="gradient bg-clip-text text-transparent">
            {' '}Srivastava
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Passionate Full Stack Developer, Java Programmer, Open Source Contributor,
          and BTech CSE student building impactful products and modern web experiences.
        </p>

        <div className="mt-10 flex gap-5 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full gradient font-semibold text-black"
          >
            View Projects
          </a>

          <a
            href="/photos/AnmolResume.pdf"
            className="border border-cyan-400 px-8 py-4 rounded-full"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
