import { useEffect, useRef } from 'react'

function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2 
    }
  }, [])

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/music/Suzume.mp3" type="audio/mpeg" />
    </audio>
  )
}

export default BackgroundMusic
