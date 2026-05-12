import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails' 
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import StarryBackground from './components/StarryBackground'
import WaterAnimation from './components/WaterAnimation'
import Seo from './components/Seo'

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
  </main>
);

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <Seo />
        <div className="App">
          <CustomCursor />
          <StarryBackground />
          <WaterAnimation />
          <Navigation activeSection={activeSection} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App