import { useEffect, useRef } from 'react'
import './WaterAnimation.css'

const WaterAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Wave {
      constructor(y, speed, amplitude, frequency, color) {
        this.y = y
        this.speed = speed
        this.amplitude = amplitude
        this.frequency = frequency
        this.color = color
        this.offset = Math.random() * Math.PI * 2
      }

      draw(time) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = this.y + Math.sin((x * this.frequency) + time * this.speed + this.offset) * this.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, this.color.start)
        gradient.addColorStop(1, this.color.end)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    const waves = [
      new Wave(
        canvas.height * 0.7,
        0.0005,
        30,
        0.005,
        { start: 'rgba(139, 92, 246, 0.05)', end: 'rgba(139, 92, 246, 0)' }
      ),
      new Wave(
        canvas.height * 0.75,
        0.0007,
        25,
        0.007,
        { start: 'rgba(236, 72, 153, 0.05)', end: 'rgba(236, 72, 153, 0)' }
      ),
      new Wave(
        canvas.height * 0.8,
        0.0003,
        35,
        0.003,
        { start: 'rgba(34, 211, 238, 0.05)', end: 'rgba(34, 211, 238, 0)' }
      )
    ]

    let animationId
    let startTime = Date.now()

    function animate() {
      const currentTime = Date.now() - startTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach(wave => {
        wave.draw(currentTime)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="water-animation" />
}

export default WaterAnimation

