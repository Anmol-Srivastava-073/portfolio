import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-5 flex justify-between items-center"
    >
      <h1 className="text-xl md:text-2xl font-black tracking-tight">
        <span className="gradient bg-clip-text text-transparent">
          Anmol Srivastava
        </span>
      </h1>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">

        <a href="#about" className="hover:text-cyan-400 transition">
          About
        </a>

        <a href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </a>

        <a href="#skills" className="hover:text-cyan-400 transition">
          Skills
        </a>

        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>

      </div>
    </motion.nav>
  )
}

export default Navbar
