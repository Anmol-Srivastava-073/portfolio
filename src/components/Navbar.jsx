import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 px-8 py-5 flex justify-between items-center bg-paper/95 backdrop-blur-sm border-b-4 border-ink"
    >
      <h1 className="text-2xl font-black font-manga text-ink tracking-tighter">
        Anmol Srivastava
      </h1>

      <div className="hidden md:flex gap-8">
        {['about', 'projects', 'skills', 'contact'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            offset={-80}
            className="font-handwritten text-2xl font-bold text-ink cursor-pointer hover:text-markerBlue hover:underline decoration-wavy transition-all capitalize"
          >
            {item}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar
