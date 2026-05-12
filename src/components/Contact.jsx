import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! Your message has been sent to Bushra.`)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Lets <span className="highlight">Connect</span></h2>
          <p className="contact-subtitle">Currently available for frontend and full-stack opportunities.</p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Direct Contact Info */}
          <motion.div 
            className="contact-info-glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-content-wrapper">
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:bushratasmin5202@gmail.com" className="info-link">bushratasmin5202@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaLinkedin /></div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/bushra-tasmin-50893026a/" target="_blank" rel="noreferrer" className="info-link">Bushra Tasmin</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Location</h4>
                  <p>Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://github.com/bushratasmin" target="_blank" rel="noreferrer" className="social-pill"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/bushra-tasmin-50893026a/" target="_blank" rel="noreferrer" className="social-pill"><FaLinkedin /></a>
              <a href="mailto:bushratasmin5202@gmail.com" className="social-pill"><FaEnvelope /></a>
            </div>
          </motion.div>

          {/* Right Side: Message Form */}
          <motion.div 
            className="contact-form-glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="input-row">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              </div>
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="full-width-input" />
              <textarea name="message" placeholder="How can I help you?" rows="6" value={formData.message} onChange={handleChange} required className="full-width-input"></textarea>
              <button type="submit" className="submit-btn">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="footer-glass">
        <p>© {new Date().getFullYear()} <strong>Bushra Tasmin</strong>. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact