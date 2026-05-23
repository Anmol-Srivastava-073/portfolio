import { motion } from 'framer-motion'
import { Music, VolumeX } from 'lucide-react'

function WelcomeScreen({ onEnter }) {
  // The "Slam" effect for the manga panel
  const slamVariant = {
    hidden: { scale: 3, opacity: 0, rotate: 10 },
    visible: {
      scale: 1, 
      opacity: 1, 
      rotate: -1,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 12, 
        mass: 1 
      }
    }
  }

  // Camera shake effect that triggers after the slam
  const containerVariant = {
    hidden: { x: 0 },
    visible: {
      x: [0, -10, 10, -5, 5, 0],
      transition: { delay: 0.3, duration: 0.4 }
    }
  }

  return (
    <motion.div 
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-paper"
    >
      {/* Manga Action Speed Lines Background */}
      <div className="manga-action-bg"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 text-ink font-handwritten text-5xl float-sketch opacity-50">♪</div>
      <div className="absolute bottom-32 right-20 text-ink font-marker text-4xl float-sketch opacity-30" style={{ animationDelay: '1s' }}>♫</div>

      <motion.div
        variants={slamVariant}
        className="bg-white p-8 md:p-14 sketch-border shadow-[12px_12px_0px_0px_#1a1a1a] max-w-xl w-full text-center relative z-10"
      >
        <div className="washi-tape bg-markerRed/60 w-40 -top-6 -rotate-3 shadow-sm"></div>
        <div className="washi-tape bg-markerYellow/60 w-24 -bottom-4 right-10 top-auto rotate-6 shadow-sm"></div>
        
        <h1 className="font-marker text-5xl md:text-6xl text-ink mb-2 uppercase tracking-tight">
          System <span className="text-markerBlue">Boot</span>
        </h1>
        <p className="font-manga font-bold text-ink/50 text-sm tracking-widest uppercase mb-10 border-b-4 border-dashed border-ink/20 pb-4">
          Audio Interface Configuration
        </p>

        {/* Aggressive Ink-blot Audio Wave */}
        <div className="flex gap-2 justify-center items-end h-24 mb-10">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.div
              key={i}
              className={`w-4 border-2 border-ink ${i % 2 === 0 ? 'bg-markerBlue' : 'bg-ink'}`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              animate={{ height: ['15%', '100%', '15%'] }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.8, 
                delay: i * 0.1,
                ease: "circInOut"
              }}
            />
          ))}
        </div>

        <p className="font-handwritten text-4xl text-ink mb-10 font-bold leading-tight">
          Engage auditory experience?
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => onEnter(true)}
            className="group sketch-border bg-white text-ink px-8 py-5 font-bold text-2xl uppercase shadow-sketch transition-all ink-fill flex items-center justify-center gap-3"
          >
            <Music className="group-hover:animate-bounce" /> Enable
          </button>
          
          <button
            onClick={() => onEnter(false)}
            className="group sketch-border-alt bg-paper text-ink/50 px-8 py-5 font-bold text-xl uppercase shadow-sketch hover:-translate-y-1 hover:shadow-sketch-hover transition-all flex items-center justify-center gap-3"
          >
            <VolumeX className="opacity-50 group-hover:opacity-100 transition-opacity" /> Mute
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default WelcomeScreen
