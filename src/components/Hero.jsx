import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Fade out and translate down as user scrolls away
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-start px-6 pt-20 max-w-7xl mx-auto relative overflow-hidden">
      {/* Structural grid background lines */}
      <div className="absolute inset-0 pointer-events-none border-x border-border/50 max-w-7xl mx-auto flex justify-between z-0">
        <div className="w-px h-full bg-border/50"></div>
        <div className="w-px h-full bg-border/50"></div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full relative z-10 pl-0 md:pl-12 border-l-4 border-accent"
      >
        <motion.div variants={item} className="font-mono text-accent mb-6 flex items-center gap-2 text-sm">
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="w-3 h-3 bg-accent inline-block"
          />
          System Status: Online
        </motion.div>
        
        <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-2 text-textMain leading-none">
          ANMOL
        </motion.h1>
        <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-textMuted leading-none">
          SRIVASTAVA.
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-textMuted max-w-2xl leading-relaxed mb-10 font-mono text-sm border-l border-border pl-4">
          &gt; Full Stack Web Developer & CS Undergrad.<br/>
          &gt; Specializing in Java Development and Data Structures.<br/>
          &gt; Architecting tools which benefit people.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 flex-wrap">
          <a href="#projects" className="bg-textMain text-base font-bold px-8 py-4 hover:bg-accent hover:text-white transition-colors uppercase tracking-widest text-sm flex items-center gap-2 group">
            View Projects
            <span className="font-mono font-normal group-hover:translate-x-1 transition-transform">-&gt;</span>
          </a>
          <a href="https://github.com/Anmol-Srivastava-073/portfolio" target="_blank" rel="noreferrer" className="border border-border text-textMain font-bold px-8 py-4 hover:border-textMain transition-colors uppercase tracking-widest text-sm">
            View Source Code
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
