import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
          Anmol
          <span className="gradient bg-clip-text text-transparent">
            {' '}Srivastava
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Passionate Full Stack Developer, Java Programmer, Open Source Contributor,
          and BTech CSE student building impactful products and modern web experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex gap-5 justify-center flex-wrap">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer px-8 py-4 rounded-full gradient font-semibold text-black hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            View Projects
          </Link>

          <a
            href="/photos/AnmolResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400/10 hover:scale-105 transition-all"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
