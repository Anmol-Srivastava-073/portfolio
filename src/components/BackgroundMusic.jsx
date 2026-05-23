import { useEffect, useRef } from 'react'

function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    // This perfectly mimics your old document.addEventListener("DOMContentLoaded")
    const bgMusic = audioRef.current;
    
    if (bgMusic) {
        bgMusic.volume = 0.1; 
        bgMusic.currentTime = 2;
        
        let playPromise = bgMusic.play();
        
        if (playPromise !== undefined) { 
            playPromise.catch(error => { 
                console.log("Music auto-play prevented:", error); 
            }); 
        }
    }
  }, [])

  return (
    <audio ref={audioRef} id="bg-music" loop>
      <source src="/music/Suzume.mp3" type="audio/mpeg" />
    </audio>
  )
}

export default BackgroundMusic
