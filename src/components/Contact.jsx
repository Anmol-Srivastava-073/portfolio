export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <div className="bg-white/5 border border-white/10 rounded-[2rem] p-12">
        <h2 className="text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/mkgvndga"
          method="POST"
          className="grid gap-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4"
          />

          <button className="bg-cyan-400 text-black font-bold py-4 rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
