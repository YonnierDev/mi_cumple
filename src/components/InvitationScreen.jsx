import { useState } from 'react'
import Countdown from './Countdown.jsx'
import Confetti from './Confetti.jsx'
import './InvitationScreen.css'

const WHATSAPP_NUMBER = '573138754025'
const MAPS_LINK = 'https://maps.app.goo.gl/UwDjA2GV1oMpn18s7'
const EVENT_DATE = new Date(2026, 8, 12, 21, 0, 0)

const CONFIRM_MESSAGE =
  'Confirmo mi asistencia al cumpleaños de Yonnier León el sábado 12 de Septiembre a las 9:00 PM en Kapri Shots'

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function InvitationScreen() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleConfirm = () => {
    setShowConfetti(true)
    window.open(buildWhatsAppLink(CONFIRM_MESSAGE), '_blank', 'noopener,noreferrer')
    setTimeout(() => setShowConfetti(false), 3500)
  }

  return (
    <div className="screen invitation-screen">
      <Confetti active={showConfetti} />

      <div className="invitation-card">
        <span className="invitation-card-corner corner-tl" />
        <span className="invitation-card-corner corner-tr" />
        <span className="invitation-card-corner corner-bl" />
        <span className="invitation-card-corner corner-br" />

        <p className="invitation-eyebrow">Te invito a mi cumpleaños</p>
        <span className="invitation-flourish">❦</span>
        <h1 className="title invitation-name">YONNIER LEÓN</h1>

        <div className="invitation-details">
          <div className="invitation-detail">
            <span className="invitation-detail-icon">📅</span>
            <span>Sábado 12 de Septiembre</span>
          </div>
          <div className="invitation-detail">
            <span className="invitation-detail-icon">🕘</span>
            <span>9:00 PM</span>
          </div>
          <a
            className="invitation-detail invitation-location"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="invitation-detail-icon">📍</span>
            <span>Kapri Shots (junto a Market Calibio)</span>
          </a>
        </div>

        <Countdown targetDate={EVENT_DATE} />

        <div className="buttons">
          <button type="button" className="btn btn-primary" onClick={handleConfirm}>
            ¡CONFIRMO MI ASISTENCIA!
          </button>
          <a
            className="btn btn-secondary btn-link"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Ubicación
          </a>
        </div>
      </div>
    </div>
  )
}

export default InvitationScreen
