import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs,
  SiEthereum,
  SiBlockchaindotcom,
  SiShopify
} from 'react-icons/si'
import { 
  FaMobileAlt, 
  FaServer, 
  FaBitcoin, 
  FaBrain,
  FaGamepad,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaDatabase,
  FaShoppingCart,
  FaHeartbeat,
  FaRobot,
  FaCloud,
  FaExchangeAlt
} from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Fullstack', icon: <FaServer /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
    { name: 'Blockchain', icon: <FaBitcoin /> },
    { name: 'AI/ML', icon: <FaBrain /> },
    { name: 'Game', icon: <FaGamepad /> }
  ]

  const projects = [
    {
      title: 'Spoken.io - E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB with product catalog, shopping cart, user authentication, payment processing, and admin dashboard.',
      role: 'Full Stack Developer',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      tags: ['E-commerce', 'Fullstack', 'React'],
      category: 'Fullstack',
      image: require('../assets/spoken.png'),
      liveLink: 'https://www.spoken.io/',
      githubLink: '',
      icon: <FaShoppingCart />
    },
    {
      title: 'NexusMD.ai - AI Healthcare Platform',
      description: 'Advanced healthcare platform leveraging AI for medical diagnostics and patient management with AI-powered symptom checker, patient monitoring, and healthcare provider dashboard.',
      role: 'Full Stack Developer',
      technologies: ['React', 'Node.js', 'Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
      tags: ['Healthcare', 'AI', 'Fullstack'],
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      liveLink: 'http://nexusmd.ai',
      githubLink: '',
      icon: <FaHeartbeat />
    },
    {
      title: 'Sophiaverse.ai - Blockchain Game',
      description: 'Blockchain-based gaming platform with NFT integration, decentralized economy, and immersive gameplay featuring character NFTs, in-game marketplace, and blockchain transactions.',
      role: 'Blockchain Developer',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      tags: ['Blockchain', 'Game', 'NFT'],
      category: 'Blockchain',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      liveLink: 'https://www.sophiaverse.ai/',
      githubLink: '',
      icon: <FaGamepad />
    },
    {
      title: 'GSAP Cocktail - Fullstack App',
      description: 'Interactive cocktail recipe application with smooth animations using GSAP featuring cocktail discovery, recipe details, ingredient search, and user favorites.',
      role: 'Full Stack Developer',
      technologies: ['React', 'GSAP', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      tags: ['GSAP', 'Fullstack', 'React'],
      category: 'Fullstack',
      image: '../assets/gsap.png',
      liveLink: 'https://gsap-cocktail-six-snowy.vercel.app/',
      githubLink: 'https://github.com/luukogod/Gsap-Cocktail',
      icon: <SiReact />
    },
    {
      title: 'MortalSoft - Casino Game Platform',
      description: 'Blockchain-powered casino gaming platform featuring various casino games with provably fair algorithms and cryptocurrency payments.',
      role: 'Blockchain Game Developer',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'WebGL', 'Phaser'],
      tags: ['Blockchain', 'Casino', 'Game'],
      category: 'Game',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop',
      liveLink: 'https://mortalsoft.net/',
      githubLink: 'https://github.com/luukogod/MortalSoft-Casino-game',
      icon: <SiBlockchaindotcom />
    },
    {
      title: 'OpenSaaS - SaaS Platform',
      description: 'Open-source SaaS platform with multi-tenant architecture, subscription management, and comprehensive admin dashboard for business applications.',
      role: 'Full Stack Developer',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind'],
      tags: ['SaaS', 'Fullstack', 'Next.js'],
      category: 'Fullstack',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      liveLink: 'https://opensaas.sh/',
      githubLink: 'https://github.com/luukogod/Open-SaaS',
      icon: <FaCloud />
    },
    {
      title: 'QuickAI - AI SaaS Platform',
      description: 'AI-powered SaaS platform offering various AI tools including content generation, image creation, code assistance, and data analysis.',
      role: 'AI Integration Developer',
      technologies: ['React', 'FastAPI', 'Python', 'OpenAI', 'PostgreSQL', 'Redis'],
      tags: ['AI', 'SaaS', 'React'],
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      liveLink: 'https://quick-ai-gray-eight.vercel.app/',
      githubLink: 'https://github.com/luukogod/QuickAI',
      icon: <FaRobot />
    },
    {
      title: 'Healthcare Service React App',
      description: 'Comprehensive healthcare management system for hospitals and clinics with patient management, appointment scheduling, and medical records.',
      role: 'Full Stack Developer',
      technologies: ['React', 'Firebase', 'Node.js', 'Material-UI', 'Chart.js', 'Redux'],
      tags: ['Healthcare', 'Fullstack', 'React'],
      category: 'Fullstack',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      liveLink: 'https://healthcare-service-react-app.web.app/',
      githubLink: 'https://github.com/luukogod/Healthcare-React-App',
      icon: <FaHeartbeat />
    },
    {
      title: 'Balancer.fi - DeFi Protocol',
      description: 'Advanced DeFi protocol for automated portfolio management and liquidity provision with smart order routing and customizable pools.',
      role: 'Blockchain Developer',
      technologies: ['Solidity', 'Ethereum', 'Hardhat', 'TypeScript', 'React', 'GraphQL'],
      tags: ['DeFi', 'Blockchain', 'Protocol'],
      category: 'Blockchain',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop',
      liveLink: 'https://balancer.fi/',
      githubLink: '',
      icon: <FaExchangeAlt />
    },
    {
      title: 'Suithetic - Blockchain & AI Platform',
      description: 'Platform combining blockchain technology with AI for synthetic asset creation and trading featuring AI-powered market prediction and DeFi integration.',
      role: 'Blockchain & AI Developer',
      technologies: ['Solidity', 'Python', 'React', 'FastAPI', 'Machine Learning', 'Web3'],
      tags: ['Blockchain', 'AI', 'DeFi'],
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      liveLink: 'https://www.suithetic.com/',
      githubLink: 'https://github.com/luukogod/suithetic',
      icon: <SiBlockchaindotcom />
    },
    {
      title: 'Veenox - Perpetual Trading Platform',
      description: 'Decentralized perpetual trading platform with leverage, cross-margin, and advanced trading features built for high-performance decentralized trading.',
      role: 'Blockchain Developer',
      technologies: ['Solidity', 'Ethereum', 'Vue.js', 'Node.js', 'WebSocket', 'Redis'],
      tags: ['DEX', 'Blockchain', 'Trading'],
      category: 'Blockchain',
      image: 'https://images.unsplash.com/photo-1642790553124-4c56d74c5a65?w=800&h=600&fit=crop',
      liveLink: 'https://veenox.xyz/',
      githubLink: 'https://github.com/luukogod/Veenox---Perpetual-trading-platfom',
      icon: <FaExchangeAlt />
    },
    {
      title: 'Talk to Hosico - AI Chatbot',
      description: 'AI-powered chatbot with blockchain integration for secure conversations and data ownership featuring NFT-based identity and encrypted messaging.',
      role: 'AI & Blockchain Developer',
      technologies: ['React', 'OpenAI', 'Solidity', 'IPFS', 'Node.js', 'Web3.js'],
      tags: ['AI', 'Blockchain', 'Chatbot'],
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442135136-760c3006743a?w=800&h=600&fit=crop',
      liveLink: 'https://talk-to-hosico.vercel.app/',
      githubLink: 'https://github.com/luukogod/Hosico-AI-Chatbot',
      icon: <FaRobot />
    },
    {
      title: 'Ape Store - NFT Marketplace',
      description: 'Premium NFT marketplace featuring exclusive digital art and collectibles with auctions, bidding, and community features.',
      role: 'Blockchain Developer',
      technologies: ['Solidity', 'Ethereum', 'Next.js', 'IPFS', 'GraphQL', 'TypeScript'],
      tags: ['NFT', 'Marketplace', 'Blockchain'],
      category: 'Blockchain',
      image: 'https://images.unsplash.com/photo-1629320646256-f4bf06696c9a?w=800&h=600&fit=crop',
      liveLink: 'https://ape.store/',
      githubLink: '',
      icon: <SiEthereum />
    }
  ]

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveLink && (
                        <motion.a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt /> Live
                        </motion.a>
                      )}
                      {project.githubLink ? (
                        <motion.a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub /> Code
                        </motion.a>
                      ) : (
                        <div className="project-link private-link" title="Private Repository">
                          <FaGithub /> Private
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="project-icon-badge">
                    {project.icon}
                  </div>
                </div>
                <div className="project-tags-top">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
