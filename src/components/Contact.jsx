import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-5xl font-bold mb-16">Contact</h2>

      <form
        action="https://formspree.io/f/mkgvndga"
        method="POST"
        className="max-w-3xl mx-auto glass p-10 rounded-3xl"
      >
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/30 p-5 rounded-xl"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black/30 p-5 rounded-xl"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-black/30 p-5 rounded-xl"
          />

          <button className="gradient px-10 py-4 rounded-full text-black font-bold">
            Send Message
          </button>
        </div>
      </form>

      <div className="flex justify-center gap-8 mt-12 text-4xl">
        <a href="https://github.com/Anmol-Srivastava-073">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/anmol-srivastava-46430727a">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/anmol_sriv.073">
          <FaInstagram />
        </a>
      </div>
    </section>
  )
}

export default Contact
