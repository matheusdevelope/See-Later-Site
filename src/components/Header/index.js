import React, { } from 'react'
import { Logo } from '../../images/Images'
import './styles.css'

export default function Home({ ShowLogo, ShowContact }) {

  return (
    <div className='HeaderContainer'>
      <ul>
        <div></div>
        <li>HOME</li>
        <li>FEATURES</li>
        <li>SERVICES</li>
        <div id='Contact' className={`Contact${ShowContact}`}>
          CONTACT
        </div>

      </ul>
      <div id='Logo' className={`Logo${ShowLogo}`}>
        <Logo height={45} widht={180} />
      </div>
    </div>
  )
}

