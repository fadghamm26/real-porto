import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Sosmed from './components/Sosmed'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setLoading(false), 500)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className={fadeOut ? 'animate-fade-out' : ''}>
        <LoadingScreen />
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Skills />
        <Sosmed />
      </main>
      <Footer />
    </div>
  )
}

export default App
