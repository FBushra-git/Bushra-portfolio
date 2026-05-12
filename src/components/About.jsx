import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
} from 'react-icons/si'
import { FaBrain, FaPalette, FaGamepad, FaRocket } from 'react-icons/fa' 
import './About.css'

const About = () => {
  const techIcons = [
    { icon: <SiReact />, position: { top: '10%', left: '15%' }, delay: 0 },
    { icon: <SiNextdotjs />, position: { top: '25%', right: '10%' }, delay: 0.2 },
    { icon: <SiJavascript />, position: { bottom: '20%', left: '10%' }, delay: 0.4 },
    { icon: <SiCplusplus />, position: { bottom: '15%', right: '15%' }, delay: 0.6 },
    { icon: <SiMongodb />, position: { top: '50%', left: '5%' }, delay: 0.1 },
    { icon: <FaBrain />, position: { top: '60%', right: '5%' }, delay: 0.3 },
  ]

  return (
    <section id="about" className="about">
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              delay: item.delay,
              y: {
                duration: 4 + (index % 2),
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            About <span className="title-highlight">Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="about-wrapper">
          <div className="about-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I am a <strong>Full Stack Developer</strong> with a solid foundation in <strong>Computer Science</strong>. My journey into the world of programming started with the core principles of <strong>C and C++</strong>, where I mastered <strong>Structured Programming (SP)</strong> and <strong>Object-Oriented Programming (OOP)</strong>. This rigorous background shaped my ability to build scalable and efficient systems from the ground up.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Beyond building interfaces, I am passionate about writing optimized code. My expertise in <strong>Data Structures and Algorithms (DSA)</strong> and <strong>Discrete Mathematics</strong> allows me to tackle complex logic with mathematical precision. I thrive in work that requires <strong>performance optimization</strong> and bridging the gap between rigorous logic and modern, user-centric web experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              When I’m not deep in a terminal, I explore my creative side through <strong>digital painting and art</strong>. This hobby fuels my eye for detail, which I apply to crafting pixel-perfect UIs in <strong>React and Next.js</strong>. I’m also an avid gamer and music lover—activities that keep me refreshed and inspired to bring new perspectives to every project I touch.
            </motion.p>

            <div className="about-stats">
                <div className="stat-item">
                    <FaBrain className="stat-icon" />
                    <span className="stat-number">DSA</span>
                    <span className="stat-text">Logic Focused</span>
                </div>
                <div className="stat-item">
                    <FaRocket className="stat-icon" />
                    <span className="stat-number">Full</span>
                    <span className="stat-text">Stack Reach</span>
                </div>
                <div className="stat-item">
                    <FaPalette className="stat-icon" />
                    <span className="stat-number">Artist</span>
                    <span className="stat-text">By Choice</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About