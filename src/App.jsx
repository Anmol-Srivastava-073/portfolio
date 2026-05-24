import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundMusic from './components/BackgroundMusic'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)

  const handleEnter = (withSound) => {
    setPlayAudio(withSound)
    setHasEntered(true)
  }

  // Show the landing page first
  if (!hasEntered) {
    return <WelcomeScreen onEnter={handleEnter} />
  }

  // Load the full site after they click a button
  return (
    <div className="min-h-screen overflow-hidden">
      <BackgroundMusic initialPlay={playAudio} />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certificates />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
    )
}

export default App
