import { useEffect, useRef } from 'react'

function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Keep volume pleasant
    audio.volume = 0.2;

    const forcePlay = () => {
      if (audio.paused) {
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // The moment it successfully plays, destroy the listeners
              window.removeEventListener('pointerdown', forcePlay);
              window.removeEventListener('keydown', forcePlay);
              window.removeEventListener('touchstart', forcePlay);
            })
            .catch(err => {
              console.warn("Browser still blocking audio:", err);
            });
        }
      }
    };

    // Attach to the most top-level window events
    window.addEventListener('pointerdown', forcePlay, { once: true });
    window.addEventListener('keydown', forcePlay, { once: true });
    window.addEventListener('touchstart', forcePlay, { once: true });

    return () => {
      window.removeEventListener('pointerdown', forcePlay);
      window.removeEventListener('keydown', forcePlay);
      window.removeEventListener('touchstart', forcePlay);
    };
  }, []);

  return (
    <audio ref={audioRef} id="bg-music" loop preload="auto">
      <source src="/music/Suzume.mp3" type="audio/mpeg" />
    </audio>
  )
}

export default BackgroundMusic
