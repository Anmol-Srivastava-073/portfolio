import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function Resume() {
  const [showResume, setShowResume] = useState(false)

  return (
    <section className="py-32 px-6 text-center">

      <SectionTitle
        title="Resume"
        subtitle="Preview and download my professional resume."
      />

      <div className="glass max-w-4xl mx-auto p-10 rounded-3xl">

        <motion.img
          whileHover={{ scale: 1.02 }}
          src="/photos/anmolfinalres.png"
          className={`rounded-3xl mx-auto shadow-2xl transition-all duration-700 ${
            showResume
              ? 'max-h-[1200px]'
              : 'max-h-[250px] object-cover'
          }`}
        />

        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          <button
            onClick={() => setShowResume(!showResume)}
            className="glass px-8 py-4 rounded-full"
          >
            {showResume ? 'Hide Resume' : 'Preview Resume'}
          </button>

          <a
            href="/photos/AnmolResume.docx"
            className="gradient px-8 py-4 rounded-full text-black font-bold"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  )
}

export default Resume
