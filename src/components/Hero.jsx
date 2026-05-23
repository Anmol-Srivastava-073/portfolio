import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight } from 'lucide-react'

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="root" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={item} className="mb-4 inline-block">
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide">
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          Hi, I'm <br className="md:hidden" />
          <span className="text-gradient">Anmol Srivastava</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
          Full Stack Developer & Software Engineer. I build exceptional digital experiences, integrating modern web technologies with AI and Cloud solutions.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-100}
            className="group cursor-pointer flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Explore My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>

          <a
            href="/photos/AnmolResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
