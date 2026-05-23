import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Lower the volume slightly so it's ambient
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }
  }, [])

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/interstellar.mp3" type="audio/mpeg" />
      </audio>
      
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="fixed bottom-8 right-8 z-50 glass p-4 rounded-full text-cyan-400 hover:text-white transition-colors border border-cyan-400/30 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  )
}

export default BackgroundMusic
