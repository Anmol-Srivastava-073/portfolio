import { motion } from 'framer-motion'

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
