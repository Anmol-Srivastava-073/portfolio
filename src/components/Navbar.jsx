import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass px-8 py-5 flex justify-between items-center"
    >
      <h1 className="text-2xl font-bold gradient bg-clip-text text-transparent">
        Anmol Srivastava
      </h1>

      <div className="hidden md:flex gap-8">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  )
}

export default Navbar
