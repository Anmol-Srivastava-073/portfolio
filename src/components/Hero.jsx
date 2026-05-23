import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto w-full relative z-10"
      >
        <div className="sketch-border bg-white p-8 md:p-12 shadow-sketch relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="washi-tape bg-markerRed/40 w-32 rotate-3"></div>
          
          <h1 className="text-5xl md:text-8xl font-black font-manga uppercase tracking-tighter mb-6 leading-none text-ink">
            Anmol <br /> Srivastava
          </h1>

          <p className="font-manga text-xl text-ink/80 max-w-3xl mx-auto leading-relaxed mb-8 font-bold">
            Passionate Full Stack Developer, Java Programmer, Open Source Contributor,
            and BTech CSE student building impactful products and modern web experiences.
          </p>

          <div className="mt-10 flex gap-5 justify-center flex-wrap">
            <a
              href="#projects"
              className="sketch-border-alt bg-markerYellow text-ink px-8 py-4 font-bold text-lg cursor-pointer shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
            >
              View Projects
            </a>

            <a
              href="/photos/AnmolResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-border bg-white text-ink px-8 py-4 font-bold text-lg cursor-pointer shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
