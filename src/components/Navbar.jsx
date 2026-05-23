import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="root" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-black text-white tracking-tighter cursor-pointer z-50 hover:text-cyan-400 transition-colors"
        >
          AS.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 cursor-pointer hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-slate-300 hover:text-white z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
