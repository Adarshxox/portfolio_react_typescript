import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlowingCursor from './components/GlowingCursor'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <GlowingCursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
