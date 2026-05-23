import { useState, useRef, useEffect } from 'react'

function BackgroundMusic({ initialPlay }) {
  const [isPlaying, setIsPlaying] = useState(initialPlay)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Set a nice background volume
    audio.volume = 0.2;

    // Because the user clicked a button on the Welcome Screen to get here,
    // the browser will allow this to play without throwing the NotAllowedError!
    if (initialPlay) {
      audio.play().catch(e => console.log("Audio play failed:", e));
    }
  }, [initialPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/Suzume.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Keeping a sticky button so the user has control over the music */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-white border-2 border-ink w-16 h-16 flex items-center justify-center rounded-full text-ink shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_0px_#1a1a1a] hover:translate-y-1 hover:translate-x-1 transition-all"
        aria-label="Toggle Background Music"
      >
        <span className="font-marker font-bold text-sm tracking-widest">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
      </button>
    </>
  )
}

export default BackgroundMusic
