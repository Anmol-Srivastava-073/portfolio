import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink text-center mb-16">Experience</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {experience.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sketch-border shadow-sketch text-center"
          >
            <div className="mx-auto w-24 h-24 border-2 border-ink rounded-full overflow-hidden mb-6 bg-white">
              <img
                src={item.image}
                className="w-full h-full object-cover manga-image"
                alt={item.title}
              />
            </div>

            <h3 className="font-manga font-black text-2xl text-ink">{item.title}</h3>
            <p className="font-handwritten text-2xl text-markerRed mt-3 font-bold">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
