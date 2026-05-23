import { motion } from 'framer-motion'

function WelcomeScreen({ onEnter }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 sketch-border shadow-sketch max-w-lg w-full text-center relative transform -rotate-1"
      >
        <div className="washi-tape bg-markerRed/40 w-32 -rotate-3"></div>
        
        <h1 className="font-marker text-4xl md:text-5xl text-ink mb-8">
            Volume 1 : Setup
        </h1>

        {/* Sketched Spotify-like Audio Wave Animation */}
        <div className="flex gap-2 justify-center items-end h-16 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-3 bg-ink border border-ink"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
              animate={{ height: ['20%', '100%', '20%'] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.2, 
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <p className="font-handwritten text-3xl text-ink mb-10">
          How would you like to experience this portfolio?
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => onEnter(true)}
            className="sketch-border bg-markerBlue text-white px-8 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
          >
            With Audio
          </button>
          
          <button
            onClick={() => onEnter(false)}
            className="sketch-border-alt bg-white text-ink px-8 py-4 font-bold text-xl uppercase shadow-sketch hover:shadow-sketch-hover hover:translate-y-1 hover:translate-x-1 transition-all"
          >
            Without Audio
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default WelcomeScreen
