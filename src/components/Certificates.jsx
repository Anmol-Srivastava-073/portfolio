import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Certificates() {
  const [showAll, setShowAll] = useState(false)

  const certs = [
    '/photos/jscert.png',
    '/photos/genai.png',
    '/photos/sqlcert.png',
    '/photos/pythoncert.png',
    '/photos/javacert.png',
    '/photos/jvcert.png',
    '/photos/jvoops.png',
  ]

  // Show first 3 for immediate impact, reveal rest on click
  const visibleCerts = showAll ? certs : certs.slice(0, 3)

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
          ACCREDITATIONS.
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Continuous learning and verified expertise across modern technologies.
        </p>
      </motion.div>

      <motion.div 
        layout 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {visibleCerts.map((cert, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              key={cert}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5"
            >
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {certs.length > 3 && (
        <motion.div layout className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-10 py-5 rounded-full overflow-hidden border border-white/20 text-white font-medium tracking-widest uppercase text-sm hover:border-white/50 transition-colors"
          >
            <span className="relative z-10">{showAll ? 'View Less' : 'View All Certificates'}</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              {showAll ? 'View Less' : 'View All Certificates'}
            </span>
          </button>
        </motion.div>
      )}
    </section>
  )
}

export default Certificates
