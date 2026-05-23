import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-3xl mx-auto">
      <h2 className="font-marker text-5xl md:text-7xl text-ink mb-16">Contact</h2>

      <motion.form
        action="https://formspree.io/f/mkgvndga"
        method="POST"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-10 sketch-border shadow-sketch relative"
      >
        <div className="washi-tape bg-markerRed/40 w-32 -rotate-2"></div>
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-paper border-2 border-ink p-4 font-handwritten text-2xl text-ink focus:outline-none focus:bg-white transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-paper border-2 border-ink p-4 font-handwritten text-2xl text-ink focus:outline-none focus:bg-white transition-colors"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full bg-paper border-2 border-ink p-4 font-handwritten text-2xl text-ink focus:outline-none focus:bg-white transition-colors resize-none"
          />

          <button type="submit" className="sketch-border-alt bg-markerBlue text-white px-10 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all w-full">
            Send Message
          </button>
        </div>
      </motion.form>

      <div className="flex justify-center gap-8 mt-12 text-5xl text-ink">
        <a href="https://github.com/Anmol-Srivastava-073" target="_blank" rel="noreferrer" className="hover:text-markerRed hover:-translate-y-2 transition-all">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/anmol-srivastava-46430727a" target="_blank" rel="noreferrer" className="hover:text-markerBlue hover:-translate-y-2 transition-all">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/anmol_sriv.073" target="_blank" rel="noreferrer" className="hover:text-markerYellow hover:-translate-y-2 transition-all">
          <FaInstagram />
        </a>
      </div>
    </section>
  )
}

export default Contact
