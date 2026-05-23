import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight } from 'lucide-react'

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="root" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50"></div>
      
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <motion.p variants={item} className="text-cyan-400 font-mono tracking-widest uppercase mb-6 text-sm md:text-base">
          Anmol Srivastava — Portfolio '26
        </motion.p>

        <motion.h1 variants={item} className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
          Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Architect.
          </span>
        </motion.h1>

        <motion.div variants={item} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-t border-white/10 pt-10 mt-10">
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
            I engineer scalable full-stack solutions and craft immersive web experiences. 
            Merging cutting-edge technologies like React, Node, and LLM APIs to build the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 shrink-0">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cyan-400 transition-colors duration-500 cursor-pointer"
            >
              Discover Work
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
            </Link>
            
            <a
              href="/photos/AnmolResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs text-white border border-white/20 hover:border-white transition-colors duration-500"
            >
              Curriculum Vitae
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
