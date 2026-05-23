import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl"
      >

        <motion.img
          src="/photos/anmol.jpeg"
          className="w-44 h-44 rounded-full mx-auto mb-10 border-4 border-cyan-400 shadow-[0_0_60px_rgba(0,229,255,0.4)] object-cover"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[-0.05em]">
          Anmol
          <br />

          <span className="gradient bg-clip-text text-transparent">
            Srivastava
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Full Stack Developer • Java Programmer • Open Source Contributor
        </p>

        <div className="mt-12 flex gap-6 justify-center flex-wrap">

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="gradient px-8 py-4 rounded-full font-bold text-black shadow-2xl"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/photos/AnmolResume.docx"
            className="glass px-8 py-4 rounded-full"
          >
            Download Resume
          </motion.a>

        </div>

      </motion.div>
    </section>
  )
}

export default Hero
