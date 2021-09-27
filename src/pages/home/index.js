import React, { useEffect, useState } from 'react'
import './styles.css'
import { Logo } from '../../images/Images'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const Title = 'Bem-Vindo!'
const Description = {
  line1: "A See Later é uma extensão web desenvolvida para agilizar sua vida na web.",
  line2: "Com foco em produtividade, em apenas 2 cliques você tem seu link salvo para uma visita futura.",
  line3: "Quando convêniente, basta abrir o See Later e navegar para a página salva."
}


export default function Home() {
  const [ShowLogo, setShowLogo] = useState('Hide')
  const [ShowContact, setShowContact] = useState('Hide')

  function handleScroll() {
    const WinHeight = window.innerHeight
    if (document.documentElement.scrollTop > WinHeight / 2) {
      console.log(WinHeight / 2)
      setShowLogo('Show')
    }
    if (document.documentElement.scrollTop < WinHeight / 2) {
      setShowLogo('Hidden')
    }
    if (document.documentElement.scrollTop > WinHeight - 65) {
      setShowContact('Show')
    }
    if (document.documentElement.scrollTop < WinHeight - 65) {
      setShowContact('Hidden')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll); console.log("T 2") }
  }, [])

  return (
    <div className='Container'>
      <Header ShowLogo={ShowLogo} ShowContact={ShowContact} />
      <div className='HomeContainer'>
        <div className="HomeBannerBox1">
          <div style={{ cursor: 'pointer' }}>
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
                <Footer ShowContact={ShowContact}/>
            </div>
          </div>
        </div>
      </div>
      <div className='HomeContainer'>
        <div className="HomeBannerBox1">
          <div style={{ cursor: 'pointer' }}>
            <Logo />
            <div id='Teste'>
      
            </div>
          </div>

        </div>
        <div className="HomeBannerBox2">
          <Header />
          <div className='HomeBannerBox2Sub'>
            <div className='HomeBannerBox2SubDescription'>
              <h1>{Title}</h1>
              <p className='TextSubDescription'>{Description.line1}</p>
              <p className='TextSubDescription'>{Description.line2}</p>
              <p className='TextSubDescription'>{Description.line3}</p>
            </div>
            <div className='HomeBannerBox2SubFooter'>
              <Footer />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

