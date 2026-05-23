import { motion } from 'framer-motion'

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

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Certificates</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
    </section>
  )
}

export default Certificates
