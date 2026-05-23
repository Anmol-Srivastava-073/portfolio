import { useState } from 'react'
import { motion } from 'framer-motion'

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

  const visibleCerts = showAll ? certs : certs.slice(0, 3)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Certificates</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {visibleCerts.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-3 sketch-border shadow-sketch hover:-translate-y-2 hover:shadow-sketch-hover transition-all duration-300"
          >
            <div className="border-2 border-ink overflow-hidden h-full bg-white">
              <img
                src={cert}
                className="w-full h-full object-cover manga-image"
                alt={`Certificate ${index + 1}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {certs.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="sketch-border-alt bg-markerYellow text-ink px-10 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Certificates
