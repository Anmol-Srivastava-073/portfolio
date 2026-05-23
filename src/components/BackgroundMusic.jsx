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
        {/* Updated audio source here */}
        <source src="/music/Suzume.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-white border-2 border-ink p-3 rounded-full text-ink shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-y-1 hover:translate-x-1 transition-all"
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  )
}

export default BackgroundMusic
