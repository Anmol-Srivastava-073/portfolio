import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <section id="root" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      
      {/* Background sketch elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-dashed border-ink/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-20 left-10 text-9xl text-ink/5 font-marker -rotate-12">Dev.</div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full relative z-10"
      >
        <div className="sketch-border bg-white p-8 md:p-12 shadow-sketch relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="washi-tape bg-markerRed/40 w-32 rotate-3"></div>
          
          <p className="font-handwritten text-3xl text-markerBlue mb-2">Volume 1: The Origin</p>
          
          <h1 className="text-5xl md:text-8xl font-black font-manga uppercase tracking-tighter mb-6 leading-none">
            Anmol <br /> Srivastava
          </h1>
          
          <p className="font-manga text-lg md:text-xl font-bold mb-8 max-w-2xl border-l-4 border-ink pl-4">
            BTech CSE Student @ MUJ. Full-stack developer, Web Developer and Open-source contributor making the right use of Internet.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="about"
              smooth={true}
              className="sketch-border-alt bg-markerYellow text-ink px-8 py-3 font-bold text-lg uppercase cursor-pointer shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
            >
              Start Reading
            </Link>
            <a
              href="/photos/AnmolResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-border bg-white text-ink px-8 py-3 font-bold text-lg uppercase cursor-pointer shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
            >
              Download Stats (CV)
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
