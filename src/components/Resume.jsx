import { motion } from 'framer-motion'

function Resume() {
  return (
    <section className="py-24 px-6 text-center max-w-5xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink mb-12">Resume</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-4 sketch-border shadow-sketch relative transform -rotate-1"
      >
        <div className="washi-tape bg-markerBlue/40 w-32 rotate-2"></div>
        <div className="border-2 border-ink overflow-hidden">
          <img
            src="/photos/anmolfinalres.png"
            className="w-full h-auto manga-image"
            alt="Resume"
          />
        </div>
      </motion.div>

      <a
        href="/photos/AnmolResume.docx"
        className="sketch-border-alt bg-markerYellow text-ink px-10 py-4 font-bold text-xl inline-block mt-12 shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
      >
        Download Resume
      </a>
    </section>
  )
}

export default Resume
