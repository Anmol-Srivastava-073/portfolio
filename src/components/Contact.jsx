import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiSubstack } from 'react-icons/si'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">Let's <span className="text-gradient">Connect</span></h2>
        <p className="text-textMuted">Open for collaborations, opportunities, or just a quick chat.</p>
      </div>

      <motion.form
        action="https://formspree.io/f/mkgvndga"
        method="POST"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-10 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full bg-white/50 border border-primary/20 rounded-xl p-4 text-textMain focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-textMuted/60"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-white/50 border border-primary/20 rounded-xl p-4 text-textMain focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-textMuted/60"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          required
          className="w-full bg-white/50 border border-primary/20 rounded-xl p-4 text-textMain focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-textMuted/60"
        />
        <button type="submit" className="btn-primary w-full py-4 text-lg">
          Send Message
        </button>
      </motion.form>

      <div className="flex flex-wrap justify-center gap-8 mt-16 text-2xl text-textMuted">
        {[
          { icon: <FaGithub />, link: "https://github.com/Anmol-Srivastava-073", hover: "hover:text-[#333]" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/anmol-srivastava-46430727a", hover: "hover:text-[#0077b5]" },
          { icon: <FaXTwitter />, link: "https://x.com/anmol_sriv073", hover: "hover:text-black" },
          { icon: <FaInstagram />, link: "https://instagram.com/anmol_sriv.073", hover: "hover:text-[#e4405f]" },
          { icon: <SiSubstack />, link: "https://substack.com/@anmolsriv073", hover: "hover:text-[#ff6719]" },
        ].map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noreferrer" className={`${social.hover} transform hover:-translate-y-1 transition-all duration-300`}>
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
