import { useMemo } from 'react'
import './Confetti.css'

const COLORS = ['#d4af37', '#f5efe3', '#8b7355', '#ffffff']

function Confetti({ active }) {
  const pieces = useMemo(() => {
    if (!active) return []
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 2.2 + Math.random() * 1.4,
      rotation: Math.random() * 360,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 6,
    }))
  }, [active])

  if (!active) return null

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size * 0.4}px`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
