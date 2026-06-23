import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const navItems = ['about', 'experience', 'skills', 'projects', 'contact']

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed w-full top-0 z-50 px-6 md:px-8 py-5 flex justify-between items-center bg-base/90 backdrop-blur-md border-b border-border"
    >
      <Link
        to="hero"
        smooth={true}
        offset={-80}
        className="font-mono text-lg md:text-xl font-bold text-textMain tracking-tight cursor-pointer hover:text-accent transition-colors"
      >
        ANMOL<span className="text-accent">.</span>SRIVASTAVA
      </Link>

      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            offset={-80}
            spy={true}
            activeClass="text-accent"
            className="font-mono text-sm text-textMuted cursor-pointer hover:text-textMain transition-colors capitalize relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar
