import React, { } from 'react'
import { CloseMEnu, Logo, Menu } from '../../images/Images'
import './styles.css'
export default function Home({ ShowLogo, ShowContact, Exec, Exec2 }) {
  function handleOpenMenu() {
    let menu = document.getElementById('UlHeader');
    let arrow = document.getElementById('MenuHamburguer');
    let contact = document.getElementById('ContactHeader')
    //contact.style.margin = '0 0 10px 0'
    arrow.className == 'ArrowUp' ?
      arrow.className = 'ArrowDown' :
      arrow.className = 'ArrowUp'

    menu.className == 'OpenUlMenu' ?
      menu.className = 'ClosedMenu' :
      menu.className = 'OpenUlMenu'
  }

  function handleCloseMEnu() {
    let menu = document.getElementById('UlHeader');
    menu.style.display = 'none'
  }

  return (
    <div id='HeaderContainer' className='HeaderContainer'>
      <div id="MenuHamburguer" className='MenuHamburguer'
        onClick={() => { handleOpenMenu() }}>
        <CloseMEnu />
      </div>
      <ul id='UlHeader' className='ClosedMenu'>
        <div></div>
        <li className='LiHeader' onClick={handleOpenMenu}><a href='#HomeContainer'>HOME</a></li>
        <li className='LiHeader' onClick={handleOpenMenu}><a href='#ServicesContainer'>SERVICES</a></li>
        <li className='LiHeader' onClick={handleOpenMenu}><a href='#FeaturesContainer'>FEATURES</a></li>
        <li id='ContactHeader' className={Exec2 ? ShowContact : ''} onClick={handleOpenMenu}>
          <a href='#ContactContainer'>CONTACT</a>
        </li>

      </ul>
      <div id='Logo' className={Exec ? ShowLogo : ''}>
        <Logo height={45} widht={180} />

      </div>

    </div>
  )
}

