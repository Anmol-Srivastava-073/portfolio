import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function Certificates() {
  const certs = [
    '/photos/jscert.png',
    '/photos/genai.png',
    '/photos/sqlcert.png',
    '/photos/pythoncert.png',
    '/photos/javacert.png',
    '/photos/jvcert.png',
    '/photos/jvoops.png',
  ]

  const [showAll, setShowAll] = useState(false)

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">

      <SectionTitle
        title="Certificates"
        subtitle="Professional certifications and achievements."
      />

      <div className="grid md:grid-cols-3 gap-8">

        {(showAll ? certs : certs.slice(0, 3)).map((cert, index) => (

          <motion.img
            key={index}
            src={cert}
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl shadow-2xl border border-white/10"
          />

        ))}

      </div>

      <div className="text-center mt-12">

        <button
          onClick={() => setShowAll(!showAll)}
          className="gradient px-8 py-4 rounded-full text-black font-bold"
        >
          {showAll ? 'Show Less' : 'View All Certificates'}
        </button>

      </div>

    </section>
  )
}

export default Certificates
