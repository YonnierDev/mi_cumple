import { useState } from 'react'
import './EnvelopeScreen.css'

function EnvelopeScreen({ onOpen }) {
  const [stage, setStage] = useState('closed') // 'closed' | 'opening'

  const handleOpen = () => {
    if (stage !== 'closed') return
    setStage('opening')
    setTimeout(onOpen, 950)
  }

  return (
    <div className={`envelope-screen screen ${stage === 'opening' ? 'is-leaving' : ''}`}>
      <p className="envelope-hint">Estás invitado a...</p>

      <button
        type="button"
        className={`envelope ${stage === 'opening' ? 'is-open' : ''}`}
        onClick={handleOpen}
        aria-label="Abrir la invitación"
      >
        <span className="envelope-shadow" />

        <span className="envelope-pocket">
          <span className="envelope-back" />
          <span className="envelope-letter">
            <span className="envelope-letter-icon">❦</span>
            <span className="envelope-letter-line" />
            <span className="envelope-letter-line" />
            <span className="envelope-letter-line short" />
          </span>
          <span className="envelope-flap" />
          <span className="envelope-seal">
            <span className="envelope-seal-ring">YL</span>
          </span>
        </span>
      </button>

      <p className="envelope-cta">Toca el sobre para abrir</p>
    </div>
  )
}

export default EnvelopeScreen
