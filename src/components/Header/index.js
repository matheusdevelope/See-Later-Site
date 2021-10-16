import React, { } from 'react'
import { Logo } from '../../images/Images'
import './styles.css'

export default function Home({ ShowLogo, ShowContact, Exec, Exec2 }) {
  return (
    <div id='HeaderContainer' className='HeaderContainer'>
      <ul>
        <div></div>
        <li><a  href='#HomeContainer'>HOME</a></li>
        <li><a href='#ServicesContainer'>SERVICES</a></li>
        <li><a href='#FeaturesContainer'>FEATURES</a></li>
        <li id='ContactHeader' className={Exec2?ShowContact:''}>
        <a href='#ContactContainer'>CONTACT</a>
        </li>

      </ul>
      <div id='Logo' className={Exec?ShowLogo:''}>
        <Logo height={45} widht={180} />
        
      </div>
      
    </div>
  )
}

