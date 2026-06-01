import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  })

  // Subtle parallax for the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 border-t border-border bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        
        <div className="md:col-span-5 relative h-[600px] border border-border overflow-hidden bg-surface group">
          {/* Animated reveal block */}
          <motion.div 
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-textMain z-20"
          />
          <motion.img
            style={{ y: imageY }}
            src="/photos/anmol.jpeg"
            className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            alt="Anmol Srivastava"
          />
          {/* Technical overlay metrics */}
          <div className="absolute bottom-4 left-4 z-30 font-mono text-xs text-textMain bg-base border border-border p-2">
            OBJ: ANMOL_SRIVASTAVA <br/>
            STATUS: RENDERING
          </div>
        </div>

        <div className="md:col-span-7">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-accent mb-4 tracking-widest text-sm"
          >
            03. // SYSTEM_ARCHITECTURE
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-textMain mb-8 tracking-tight"
          >
            Engineering at the intersection of logic and scale.
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-textMuted font-mono text-sm leading-relaxed"
          >
            <p>
              I am a developer who views software engineering not just as writing syntax, but as solving complex architectural puzzles. Currently pursuing my BTech in Computer Science, my foundation is built on rigorous logic, multivariable calculus, and data structures.
            </p>
            <p>
              My recent focus centers around integrating Large Language Models into production environments. Whether it is mitigating latency in clinical tools via the Claude API or architecting seamless PWA navigation systems, I build tools designed for genuine utility and performance.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
