import { useEffect, useRef } from 'react'
import './StarryBackground.css'

const StarryBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = []
    const starCount = 100

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random()
        this.fadeSpeed = (Math.random() - 0.5) * 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.opacity += this.fadeSpeed

        if (this.opacity <= 0 || this.opacity >= 1) {
          this.fadeSpeed *= -1
        }

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1
        }
      }

      draw() {
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(star => {
        star.update()
        star.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="starry-background" />
}

export default StarryBackground

