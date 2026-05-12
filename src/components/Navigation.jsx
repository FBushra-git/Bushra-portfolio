/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
// Added FaGraduationCap for the Education icon
import { FaHome, FaCode, FaProjectDiagram, FaEnvelope, FaWhatsapp, FaUser, FaGraduationCap } from 'react-icons/fa'
import './Navigation.css'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    // Added Education item here
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ]

  const whatsappUrl = "https://wa.me/8801319244812?text=Hello!%20I'm%20interested%20in%20booking%20a%20call%20with%20you.";

  return (
    <motion.nav 
      className={`navigation ${activeSection === 'home' ? 'navigation--home' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          Bush<span>ra</span>
        </div>

        <div className="nav-menu-wrapper">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.a 
                  href={`#${item.id}`} 
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="book-call-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="btn-icon" />
            <span className="btn-text">Book a Call</span>
          </motion.a>
          
          <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation