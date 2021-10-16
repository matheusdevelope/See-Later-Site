import React, { useEffect } from 'react'
import { debounce } from 'lodash';
import './styles.css'
import { Logo } from '../../images/Images'
import Footer from '../../components/Footer'
import Download from '../../components/Download'


const Title = 'Bem-Vindo!'
const Description = {
  line1: "A See Later é uma extensão web desenvolvida para agilizar sua vida na web.",
  line2: "Com foco em produtividade, em apenas 2 cliques você tem seu link salvo para uma visita futura.",
  line3: "Quando convêniente, basta abrir o See Later e navegar para a página salva."
}
export default function Home({
  ShowLogo, setShowLogo,
  ShowContact, setShowContact,
   setExec,
   setExec2
}) {
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
     let el1 = document.getElementById('ButtonConfirmedContact');
     el1.className ='ButtonConfirmedContact';
     let el2 = document.getElementById('FieldsContact');
     setTimeout(() => {
      el2.className ='FieldsContactShow';
    }, 1000);
     console.log(el, el2)
  }
  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll,100))
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <div id='HomeContainer' className='HomeContainer' >
        <div id="HomeBannerBox1" className="HomeBannerBox1">
          <div id='HomeLogo' className={`HomeLogo${ShowLogo}`} >
            <Logo/>
            <Download/>
          </div>
        </div>
        <div className="HomeBannerBox2" >
          <div className='HomeBannerBox2Sub'>
            <div className='HomeBannerBox2SubDescription'>
              <h1>{Title}</h1>
              <p className='TextSubDescription'>{Description.line1}</p>
              <p className='TextSubDescription'>{Description.line2}</p>
              <p className='TextSubDescription'>{Description.line3}</p>
            </div>
            <div className='HomeBannerBox2SubFooter'>
              <Footer ShowContact={ShowContact} margin={`0 0 3% 0`} padding={`0 0 0 8%`} />
              <a id='ButtonFieldsContactHome' className='ButtonFieldsContactHome'
              href='#ContactContainer'
              onClick={handleOpenFieldsContact}
              >
                Vamos Conversar!
              </a>
            </div>
          </div>
        </div>
      </div>
      
  )
}

