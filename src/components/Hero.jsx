import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-20 relative">
      {/* Abstract background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto w-full relative z-10"
      >
        <div className="glass-card p-10 md:p-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-textMain">
            Hi, I'm <span className="text-gradient">Anmol Srivastava</span>
          </h1>

          <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Passionate Full Stack Developer, Java Programmer, and Open Source Contributor 
            building impactful products and elegant modern web experiences.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/photos/AnmolResume.docx" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
