import React, { useState } from 'react'
import Home from './pages/home/'
import Services from './pages/services/'
import Features from './pages/features/'
import Contact from './pages/contact/'
import Header from './components/Header'
import './App.css'

function App() {
  const [ShowLogo, setShowLogo] = useState('LogoHide')
  const [ShowContact, setShowContact] = useState('Contact')
  const [Exec, setExec] = useState(false)
  const [Exec2, setExec2] = useState(false)

  return (
    <div className='Container' >
      <Header ShowLogo={ShowLogo} ShowContact={ShowContact} Exec={Exec} Exec2={Exec2} />

      <Home ShowLogo={ShowLogo} setShowLogo={setShowLogo}
        ShowContact={ShowContact} setShowContact={setShowContact}
        Exec={Exec} setExec={setExec}
        Exec2={Exec2} setExec2={setExec2} />

      <Services  />

      <Features  />

      <Contact  />

    </div>
  )
}

export default App;

