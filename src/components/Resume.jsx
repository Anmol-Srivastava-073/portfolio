import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaEye, FaTimes } from 'react-icons/fa'

function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">My <span className="text-gradient">Resume</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 relative max-w-2xl mx-auto group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl mb-6 shadow-soft">
            <FaEye />
          </div>
          <h3 className="text-2xl font-bold text-textMain mb-4">View My Full Profile</h3>
          <p className="text-textMuted mb-10 max-w-sm">
            Take a deeper dive into my academic background, technical skills, and professional experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <button
              onClick={() => setIsOpen(true)}
              className="btn-primary flex items-center gap-2 flex-1 justify-center min-w-[160px]"
            >
              <FaEye /> Preview 
            </button>
            <a
              href="/photos/AnmolResume.docx"
              className="btn-outline flex items-center gap-2 flex-1 justify-center min-w-[160px]"
            >
              <FaDownload /> Download
            </a>
          </div>
        </div>
      </motion.div>

      {/* Full Screen Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-textMain/70 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass-card p-2 relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the resume itself
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-textMuted bg-white hover:text-primary w-10 h-10 flex items-center justify-center rounded-full z-10 shadow-md transition-all border border-primary/10"
              >
                <FaTimes />
              </button>
              <div className="bg-white rounded-2xl overflow-hidden p-2">
                <img
                  src="/photos/anmolfinalres.png"
                  className="w-full h-auto rounded-xl"
                  alt="Full Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Resume
