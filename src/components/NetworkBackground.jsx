import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

const MAX_DISTANCE = 170

function createNodes(width, height, count) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08,
  }))
}

export default function NetworkBackground() {
  const canvasRef = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = canvas?.parentElement
    if (!canvas || !hero) return undefined

    const context = canvas.getContext("2d")
    let animationFrame
    let nodes = []
    let edges = []
    let packet = null
    let lastPacketAt = 0
    let visible = true
    let mouse = null
    let viewport = { width: 0, height: 0, dpr: 1 }

    const resize = () => {
      const bounds = hero.getBoundingClientRect()
      viewport = {
        width: bounds.width,
        height: bounds.height,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      }
      canvas.width = viewport.width * viewport.dpr
      canvas.height = viewport.height * viewport.dpr
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      context.setTransform(viewport.dpr, 0, 0, viewport.dpr, 0, 0)
      nodes = createNodes(viewport.width, viewport.height, viewport.width < 768 ? 20 : 40)
      draw()
    }

    const updateEdges = () => {
      edges = []
      for (let first = 0; first < nodes.length; first += 1) {
        for (let second = first + 1; second < nodes.length; second += 1) {
          const dx = nodes[first].x - nodes[second].x
          const dy = nodes[first].y - nodes[second].y
          if (Math.hypot(dx, dy) < MAX_DISTANCE) edges.push([first, second])
        }
      }
    }

    const draw = (timestamp = 0) => {
      context.clearRect(0, 0, viewport.width, viewport.height)
      updateEdges()

      edges.forEach(([first, second]) => {
        const start = nodes[first]
        const end = nodes[second]
        const midpointX = (start.x + end.x) / 2
        const midpointY = (start.y + end.y) / 2
        const distanceToCursor = mouse
          ? Math.hypot(mouse.x - midpointX, mouse.y - midpointY)
          : Infinity
        const brightness = Math.max(0, 1 - distanceToCursor / 180)

        context.beginPath()
        context.moveTo(start.x, start.y)
        context.lineTo(end.x, end.y)
        context.strokeStyle = `rgba(94, 234, 212, ${0.08 + brightness * 0.28})`
        context.lineWidth = 0.6 + brightness * 0.8
        context.stroke()
      })

      nodes.forEach((node) => {
        context.beginPath()
        context.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        context.fillStyle = "rgba(167, 139, 250, 0.5)"
        context.fill()
      })

      if (packet) {
        const start = nodes[packet.edge[0]]
        const end = nodes[packet.edge[1]]
        const x = start.x + (end.x - start.x) * packet.progress
        const y = start.y + (end.y - start.y) * packet.progress
        context.beginPath()
        context.arc(x, y, 2.5, 0, Math.PI * 2)
        context.shadowBlur = 12
        context.shadowColor = "#fbbf24"
        context.fillStyle = "#fbbf24"
        context.fill()
        context.shadowBlur = 0
      }

      if (!reducedMotion && visible) {
        nodes.forEach((node) => {
          node.x = (node.x + node.vx + viewport.width) % viewport.width
          node.y = (node.y + node.vy + viewport.height) % viewport.height
        })

        if (timestamp - lastPacketAt > 4000 && edges.length > 0) {
          packet = { edge: edges[Math.floor(Math.random() * edges.length)], progress: 0 }
          lastPacketAt = timestamp
        }
        if (packet) {
          packet.progress += 0.008
          if (packet.progress >= 1) packet = null
        }
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    const handleMouseMove = (event) => {
      const bounds = hero.getBoundingClientRect()
      mouse = { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
      if (reducedMotion || !visible) draw()
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reducedMotion && !animationFrame) animationFrame = window.requestAnimationFrame(draw)
      if (!visible && animationFrame) {
        window.cancelAnimationFrame(animationFrame)
        animationFrame = undefined
      }
    }, { threshold: 0 })

    resize()
    observer.observe(hero)
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [reducedMotion])

  return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />
}
