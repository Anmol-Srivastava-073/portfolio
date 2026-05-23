import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-24 px-6 text-center max-w-5xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink mb-12">Resume</h2>

      {/* Minimized View */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-4 sketch-border shadow-sketch relative transform -rotate-1 max-w-md mx-auto"
      >
        <div className="washi-tape bg-markerBlue/40 w-32 rotate-2"></div>
        <div className="border-2 border-ink overflow-hidden h-64 relative">
          <img
            src="/photos/anmolfinalres.png"
            className="w-full h-full object-cover object-top manga-image opacity-60"
            alt="Resume Thumbnail"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 flex items-end justify-center pb-6">
             <span className="font-handwritten text-3xl font-bold text-ink">Confidential Stats</span>
          </div>
        </div>
      </motion.div>

      {/* Side-by-Side Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <button
          onClick={() => setIsOpen(true)}
          className="sketch-border bg-markerBlue text-white px-10 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
        >
          View Resume
        </button>
        <a
          href="/photos/AnmolResume.docx"
          className="sketch-border-alt bg-markerYellow text-ink px-10 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
        >
          Download
        </a>
      </div>

      {/* Full Screen Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-4 sketch-border relative max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-sketch"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the resume itself
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 font-marker text-2xl text-white bg-markerRed border-2 border-ink w-12 h-12 flex items-center justify-center rounded-full z-10 hover:scale-110 shadow-sketch transition-transform"
              >
                X
              </button>
              <img
                src="/photos/anmolfinalres.png"
                className="w-full h-auto manga-image"
                alt="Full Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Resume
