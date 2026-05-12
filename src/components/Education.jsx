import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Metropolitan University',
      location: 'Sylhet, Bangladesh',
      duration: 'Present',
      description: 'Currently pursuing an engineering degree with a focus on core computer science principles and software development.',
      icon: <FaUniversity />,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Agragami Girls High School and College',
      location: 'Sylhet, Bangladesh',
      duration: 'Science Stream',
      description: 'Completed higher secondary education with a specialized focus on the Science group.',
      icon: <FaSchool />,
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Agragami Girls High School and College',
      location: 'Sylhet, Bangladesh',
      duration: 'Science Stream',
      description: 'Foundational secondary education in Science, graduated from Sylhet.',
      icon: <FaGraduationCap />,
    }
  ]

  return (
    <section id="education" className="edu-section">
      <div className="edu-container">
        <div className="edu-header">
          <h2 className="edu-title">Educational <span className="edu-highlight">Journey</span></h2>
          <div className="edu-underline"></div>
        </div>

        <div className="edu-list">
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="edu-card" 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="edu-icon-container">{item.icon}</div>
              <div className="edu-details">
                <span className="edu-tag">{item.duration}</span>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
                <small className="edu-loc">{item.location}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education