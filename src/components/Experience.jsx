import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-primary/20 ml-6 md:ml-0 md:pl-0 space-y-12">
        {experience.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-0 md:flex md:items-center md:justify-between group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] md:left-[50%] md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background shadow-glow group-hover:scale-125 transition-transform duration-300"></div>

            <div className={`md:w-[45%] glass-card p-6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
              <div className="flex items-center gap-4 mb-3">
                <img src={item.image} className="w-12 h-12 rounded-full object-cover border border-primary/20" alt={item.title} />
                <h3 className="font-bold text-lg text-textMain">{item.title}</h3>
              </div>
              <p className="text-primary font-medium">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
