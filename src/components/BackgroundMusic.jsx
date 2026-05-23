import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
    }
  }, [])

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/interstellar.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-surface border border-border p-3 rounded-full text-muted hover:text-white hover:border-neutral-500 transition-all"
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </>
  )
}

export default BackgroundMusic
