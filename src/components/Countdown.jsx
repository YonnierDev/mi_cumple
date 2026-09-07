import { useEffect, useState } from 'react'
import './Countdown.css'

function getTimeLeft(targetDate) {
  const diff = targetDate.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, done: false }
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (timeLeft.done) {
    return (
      <div className="countdown countdown-done">
        <p className="countdown-label">¡Es hoy! Nos vemos en la fiesta 🎉</p>
      </div>
    )
  }

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ]

  return (
    <div className="countdown">
      <p className="countdown-label">Faltan</p>
      <div className="countdown-grid">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <span className="countdown-value">{String(unit.value).padStart(2, '0')}</span>
            <span className="countdown-unit-label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
