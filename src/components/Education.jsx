import { motion } from 'framer-motion'
import { education } from '../data/portfolioData'

function Education() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Education</h2>

      <div className="space-y-8">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sketch-border shadow-sketch flex flex-col md:flex-row gap-8 items-center relative"
          >
            <div className="border-2 border-ink rounded-full overflow-hidden w-24 h-24 shrink-0 bg-white">
              <img
                src={item.image}
                className="w-full h-full object-cover manga-image"
                alt={item.title}
              />
            </div>

            <div>
              <h3 className="font-manga font-black text-2xl text-ink">{item.title}</h3>
              <p className="font-handwritten text-2xl text-markerBlue mt-2 font-bold">{item.location}</p>
              <p className="font-handwritten text-2xl text-ink mt-3">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
