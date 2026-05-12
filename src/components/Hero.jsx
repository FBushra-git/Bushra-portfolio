import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaCode, FaCheckDouble, FaUserGraduate, FaTerminal } from 'react-icons/fa'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import profileImage from '../assets/profile.jpeg';
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const name = "Bushra Tasmin"
  
  // Typing Effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(name.substring(0, i));
      i++;
      if (i > name.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const quickStats = [
    { icon: <FaTerminal />, value: 'Full Stack', label: 'Developer' },
    { icon: <FaCheckDouble />, value: '10+', label: 'Practice Projects' },
    { icon: <FaCode />, value: '100+', label: 'DSA Solved' },
    { icon: <FaUserGraduate />, value: '2026', label: 'CS Student' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* LEFT SIDE: Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-intro-text">
              <h2 className="hello-text">Hello, I am</h2>
              <h1 className="hero-name">
                <span className="typing-name">{text}</span>
                <span className="cursor">|</span>
              </h1>
              <h3 className="hero-role-simple">Full Stack Web Developer</h3>
            </div>

            <p className="hero-description">
              Building clean, modern, and responsive web applications with a focus 
              on user experience and efficient code.
            </p>

            <div className="hero-action-buttons">
                <motion.a
                    href="/resume.pdf" 
                    download
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Download Resume <FaDownload />
                </motion.a>

                <div className="hero-contacts-inline">
                    {/* No target="_blank" for Gmail to prevent empty tabs */}
                    <motion.a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=bushratasmin5202@gmail.com" 
                      target="_blank" 
        rel="noreferrer" 
        className="contact-link-hero"
                      
                      whileHover={{ y: -3 }}
                    >
                      <SiGmail />
                    </motion.a>
                    
                    <motion.a 
                      href="https://www.linkedin.com/in/nusrat-tasmin-bushra/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="contact-link-hero"
                      whileHover={{ y: -3 }}
                    >
                      <SiLinkedin />
                    </motion.a>
                    
                    <motion.a 
                      href="https://github.com/FBushra-git" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="contact-link-hero"
                      whileHover={{ y: -3 }}
                    >
                      <SiGithub />
                    </motion.a>
                </div>
            </div>

            <div className="quick-stats-horizontal">
                {quickStats.map((stat, index) => (
                  <div key={index} className="quick-stat-pill">
                    <span className="stat-icon-pill">{stat.icon}</span>
                    <div className="stat-content-pill">
                      <span className="stat-value-pill">{stat.value}</span>
                      <span className="stat-label-pill">{stat.label}</span>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image */}
          <motion.div 
            className="hero-image-column"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -40 }} // Moves the image up
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="image-reveal-wrapper">
              <div className="gradient-circle-glow"></div>
              <img src={profileImage} alt="Bushra Tasmin" className="hero-profile-img" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero