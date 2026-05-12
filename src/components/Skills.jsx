import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, SiJavascript, SiNextdotjs, SiNodedotjs, SiMongodb, 
  SiMysql, SiFirebase, SiGithub, SiPostman, SiFigma, 
  SiVite, SiHtml5, SiCss3, SiExpress, SiCplusplus, 
  SiC, SiTailwindcss, SiNetlify, SiVercel, SiPhp, 
  SiDaisyui, SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si'
import { 
  FaDatabase, FaCode, FaPalette, FaCog, FaUsers, 
  FaComments, FaLightbulb, FaCrown, FaRocket, FaHeart, 
  FaTerminal, FaPenNib // Added for Penpot/Design
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCog /> }
  ]

  const technicalSkills = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'ES6+', icon: <SiJavascript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'DaisyUI', icon: <SiDaisyui /> },
        { name: 'Hero UI', icon: <FaPalette /> },
        { name: 'HTML5/CSS3', icon: <SiHtml5 /> }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'NoSQL', icon: <SiMongodb /> },
        { name: 'REST APIs', icon: <FaRocket /> }
      ]
    },
    {
      title: 'Programming Core',
      icon: <FaTerminal />,
      skills: [
        { name: 'C Programming', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <FaCode /> },
        { name: 'DSA', icon: <FaTerminal /> },
        { name: 'OOP', icon: <FaCode /> },
        { name: 'Logic Design', icon: <FaLightbulb /> }
      ]
    }
  ]

  const softSkills = [
    { title: 'Communication', icon: <FaComments />, description: 'Clear technical documentation and stakeholder interaction.' },
    { title: 'Problem Solving', icon: <FaLightbulb />, description: 'Breaking down complex algorithmic challenges.' },
    { title: 'Adaptability', icon: <FaRocket />, description: 'Quickly pivoting to new stacks and methodologies.' },
    { title: 'Team Player', icon: <FaUsers />, description: 'Collaborative development in agile environments.' },
    { title: 'Leadership', icon: <FaCrown />, description: 'Guiding projects from conception to deployment.' },
    { title: 'Detail Oriented', icon: <FaHeart />, description: 'Focusing on clean code and pixel-perfect UI.' }
  ]

  const tools = [
    {
      title: 'Design Stack',
      icon: <FaPalette />,
      tools: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Pixso', icon: <FaPalette /> },
        { name: 'Penpot', icon: <FaPenNib /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator /> }
      ]
    },
    {
      title: 'Development Tools',
      icon: <FaCode />,
      tools: [
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Git/GitHub', icon: <SiGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Vite', icon: <SiVite /> }
      ]
    },
    {
      title: 'Cloud & Deploy',
      icon: <FaRocket />,
      tools: [
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Netlify', icon: <SiNetlify /> }
      ]
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }),
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & <span className="title-highlight">Expertise</span></h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="skill-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`skill-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-content"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="skills-grid-3">
              {activeTab === 'Technical' && technicalSkills.map((category, index) => (
                <motion.div key={index} custom={index} variants={cardVariants} className="skill-card">
                  <div className="card-header">
                    <div className="icon-box">{category.icon}</div>
                    <h3>{category.title}</h3>
                  </div>
                  <div className="skills-pill-container">
                    {category.skills.map((skill, si) => (
                      <div key={si} className="skill-pill">
                        <span className="pill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {activeTab === 'Soft Skills' && softSkills.map((skill, index) => (
                <motion.div key={index} custom={index} variants={cardVariants} className="soft-card">
                  <div className="soft-icon-wrapper">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </motion.div>
              ))}

              {activeTab === 'Tools' && tools.map((category, index) => (
                <motion.div key={index} custom={index} variants={cardVariants} className="skill-card">
                  <div className="card-header">
                    <div className="icon-box">{category.icon}</div>
                    <h3>{category.title}</h3>
                  </div>
                  <div className="skills-pill-container">
                    {category.tools.map((tool, ti) => (
                      <div key={ti} className="skill-pill">
                        <span className="pill-icon">{tool.icon}</span>
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills