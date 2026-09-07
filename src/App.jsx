import { useState } from 'react'
import EnvelopeScreen from './components/EnvelopeScreen.jsx'
import InvitationScreen from './components/InvitationScreen.jsx'
import './App.css'

function App() {
  const [screen, setScreen] = useState('envelope')

  return (
    <div className="app">
      {screen === 'envelope' ? (
        <EnvelopeScreen onOpen={() => setScreen('invitation')} />
      ) : (
        <InvitationScreen />
      )}
    </div>
  )
}

export default App
