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

function App() {
  return (
    <div className="bg-dark text-white">
      <BackgroundMusic />
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
