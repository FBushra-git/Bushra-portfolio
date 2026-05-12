import { useEffect, useState } from 'react' // Fixed: Un-commented imports
import { motion, useSpring } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseEnter = () => setCursorVariant('hover')
    const mouseLeave = () => setCursorVariant('default')

    window.addEventListener('mousemove', mouseMove)

    // Select all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .glass-card, .social-pill')
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnter)
        el.removeEventListener('mouseleave', mouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      rotate: 0
    },
    hover: {
      x: mousePosition.x - 30, // Larger area on hover
      y: mousePosition.y - 30,
      scale: 1.8,
      rotate: 90, // Subtle rotation adds a "tech" feel
      borderWidth: "1px",
      borderColor: "#22d3ee"
    }
  }

  const followerVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.5, // Shrink nucleus to focus on the outer ring expansion
      opacity: 0.8
    }
  }

  return (
    <>
      <motion.div
        className={`custom-cursor ${cursorVariant === 'hover' ? 'hovering' : ''}`}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        variants={followerVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 40,
          mass: 0.2
        }}
      />
    </>
  )
}

export default CustomCursor