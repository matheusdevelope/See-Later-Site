import React, { useEffect, useState } from 'react'
import './styles.css'
import { Logo } from '../../images/Images'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Services from '../services'
import Features from '../features'
import Contact from '../contact'
const Title = 'Bem-Vindo!'
const Description = {
  line1: "A See Later é uma extensão web desenvolvida para agilizar sua vida na web.",
  line2: "Com foco em produtividade, em apenas 2 cliques você tem seu link salvo para uma visita futura.",
  line3: "Quando convêniente, basta abrir o See Later e navegar para a página salva."
}


export default function Home() {
  const [ShowLogo, setShowLogo] = useState('LogoHide')
  const [ShowContact, setShowContact] = useState('Contact')
  const [Exec, setExec] = useState(false)
  const [Exec2, setExec2] = useState(false)


  function handleScroll() {
    const WinHeight = window.innerHeight
    const ScrollTop = document.documentElement.scrollTop

    if (ScrollTop > WinHeight / 2) {
      setShowLogo('LogoShow')
      setExec(true)
    }
    if (ScrollTop < WinHeight / 2) {
      setShowLogo('LogoHidden')
    }
    if (ScrollTop > WinHeight - 65) {
      setShowContact('ContactShow')
      setExec2(true)
    }
    if (ScrollTop < WinHeight - 65) {
      setShowContact('ContactHidden')
    }

  }
  function handleOpenFieldsContact(){
    let el = document.getElementById('ButtonFieldsContact');
    el.className ='ButtonFieldsContactShow';
    let el2 = document.getElementById('FieldsContact');
    el2.className ='FieldsContactShow';
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <div className='Container'>
      <Header ShowLogo={ShowLogo} ShowContact={ShowContact} Exec={Exec} Exec2={Exec2} />
      <div id='HomeContainer' className='HomeContainer'>
        <div className="HomeBannerBox1">
          <div id='HomeLogo' className={`HomeLogo${ShowLogo}`}>
            <Logo />
          </div>
        </div>
        <div className="HomeBannerBox2">

          <div className='HomeBannerBox2Sub'>
            <div className='HomeBannerBox2SubDescription'>
              <h1>{Title}</h1>
              <p className='TextSubDescription'>{Description.line1}</p>
              <p className='TextSubDescription'>{Description.line2}</p>
              <p className='TextSubDescription'>{Description.line3}</p>
            </div>
            <div className='HomeBannerBox2SubFooter'>
              <Footer ShowContact={ShowContact} margin={`0 0 3% 0`} padding={`0 0 0 8%`} />
              <a id='ButtonFieldsContactHome' 
              href='#ContactContainer'
              onClick={handleOpenFieldsContact}
              >
                Vamos Conversar!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id='ServicesContainer' className='Services'>
        <Services />
      </div>
      <div id='FeaturesContainer' className='Features'>
        <Features />
      </div>
      <div id='ContactContainer' className='Contact'>
        <Contact />
      </div>
    </div>
  )
}

