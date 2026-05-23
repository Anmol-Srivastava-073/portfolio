import { useEffect, useRef } from 'react'

function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const bgMusic = audioRef.current;
    
    if (bgMusic) {
        bgMusic.volume = 0.2; 
    }
    const startAudio = () => {
        if (bgMusic && bgMusic.paused) {
            let playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.log("Audio playback waiting for interaction...", error));
            }
        }
        
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
        document.removeEventListener('keydown', startAudio);
        document.removeEventListener('scroll', startAudio);
    };
    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);
    document.addEventListener('keydown', startAudio);
    document.addEventListener('scroll', startAudio);

    return () => {
        document.removeEventListener('click', startAudio);
        document.removeEventListener('touchstart', startAudio);
        document.removeEventListener('keydown', startAudio);
        document.removeEventListener('scroll', startAudio);
    };
  }, [])

  return (
    <audio ref={audioRef} id="bg-music" loop>
      <source src="/music/Suzume.mp3" type="audio/mpeg" />
    </audio>
  )
}

export default BackgroundMusic
