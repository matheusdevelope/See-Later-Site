import React, { } from 'react'
import { Email, GitHub, Linkedin } from '../../images/Images'
import './styles.css'


export default function Home({ShowContact}) {
  return (
    <div className='FooterContainer'>
      <ul id='FooterContainerUl' className={`ContactFooter${ShowContact}`}>
        <li>
          <GitHub/>
        </li>
        <li>
          <Linkedin/>
        </li>
        <li>
          <Email/>
        </li>
      </ul>
    </div>
  )
}

