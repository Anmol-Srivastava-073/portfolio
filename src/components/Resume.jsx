import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  const certs = [
    '/photos/jscert.png', '/photos/genai.png', '/photos/sqlcert.png',
    '/photos/pythoncert.png', '/photos/javacert.png', '/photos/jvcert.png', '/photos/jvoops.png'
  ]

  return (
    <section className="py-32 px-6 border-t border-border bg-base text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-accent mb-2">05. // CREDENTIALS</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain mb-12">Data Access</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <button 
            onClick={() => setIsOpen(true)}
            className="dev-card bg-surface text-left group hover:bg-[#0a0a0a] transition-colors flex flex-col justify-between h-48"
          >
            <span className="font-mono text-textMuted text-xs mb-4 block">&gt; sudo view resume.pdf</span>
            <div>
              <h4 className="text-2xl font-bold text-textMain group-hover:text-accent transition-colors">Curriculum Vitae</h4>
              <p className="font-mono text-sm text-textMuted mt-2">[ EXECUTE ]</p>
            </div>
          </button>
          
          <a 
            href="/photos/AnmolResume.docx"
            target="_blank"
            rel="noreferrer"
            className="dev-card bg-surface text-left group hover:bg-[#0a0a0a] transition-colors flex flex-col justify-between h-48"
          >
            <span className="font-mono text-textMuted text-xs mb-4 block">&gt; wget resume.docx</span>
            <div>
              <h4 className="text-2xl font-bold text-textMain group-hover:text-accent transition-colors">Download File</h4>
              <p className="font-mono text-sm text-textMuted mt-2">[ DOWNLOAD ]</p>
            </div>
          </a>
        </div>

        {/* Certificate Micro-Grid */}
        <div className="mt-16 text-left">
          <h4 className="font-mono text-textMain border-b border-border pb-4 mb-6 text-sm">VERIFIED_CERTIFICATES</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
             {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-border aspect-square relative group overflow-hidden bg-white"
                >
                  <img src={cert} className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300" alt={`Cert ${index}`} />
                  <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity"></div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>

      {/* Strict Solid Modal (No glassmorphism) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-base/95 flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-surface border border-border w-full max-w-4xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-border bg-base">
                <span className="font-mono text-xs text-textMuted">viewer://resume.pdf</span>
                <button onClick={() => setIsOpen(false)} className="text-textMuted hover:text-accent font-mono text-sm uppercase">
                  [ close ]
                </button>
              </div>
              <div className="p-4 overflow-y-auto bg-[#0a0a0a]">
                <img src="/photos/anmolfinalres.png" className="w-full h-auto filter contrast-125" alt="Full Resume" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Resume
