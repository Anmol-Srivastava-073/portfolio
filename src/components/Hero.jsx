import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {' '}Anmol
            </span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8">
            Computer Science student passionate about full stack development,
            cloud computing, open source, and building impactful projects.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="px-7 py-4 bg-cyan-400 text-black rounded-2xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="/photos/AnmolResume.pdf"
              target="_blank"
              className="px-7 py-4 border border-white/20 rounded-2xl"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/photos/anmol.jpeg"
            className="w-[350px] rounded-[2rem] border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30"
          />
        </motion.div>
      </div>
    </section>
  )
}
