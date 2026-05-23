import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          Anmol Srivastava
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Full Stack Developer, Open Source Contributor, and BTech CSE student. 
          I build clean, modern web experiences and scalable software solutions.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex gap-4 flex-wrap">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-neutral-200 transition-colors"
          >
            View Projects
          </Link>

          <a
            href="/photos/AnmolResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border text-white px-6 py-3 rounded-md font-medium hover:border-neutral-500 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
