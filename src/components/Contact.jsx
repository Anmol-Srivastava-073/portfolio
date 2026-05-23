import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
        <p className="text-muted">Have a project in mind or just want to say hi? Let's connect.</p>
      </div>

      <form
        action="https://formspree.io/f/mkgvndga"
        method="POST"
        className="space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full bg-surface border border-border text-white px-4 py-3 rounded-md focus:outline-none focus:border-neutral-500 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-surface border border-border text-white px-4 py-3 rounded-md focus:outline-none focus:border-neutral-500 transition-colors"
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          required
          className="w-full bg-surface border border-border text-white px-4 py-3 rounded-md focus:outline-none focus:border-neutral-500 transition-colors resize-none"
        />

        <button 
          type="submit"
          className="w-full bg-white text-black font-medium py-3 rounded-md hover:bg-neutral-200 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-16">
        <a href="https://github.com/Anmol-Srivastava-073" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/anmol-srivastava-46430727a" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="https://instagram.com/anmol_sriv.073" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
          <FaInstagram size={24} />
        </a>
      </div>
    </section>
  )
}

export default Contact
