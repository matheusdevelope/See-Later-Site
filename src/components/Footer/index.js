import React, { } from 'react'
import { Email, GitHub, Linkedin } from '../../images/Images'
import './styles.css'


export default function Home({ShowContact, margin, padding}) {
  return (
    <div className='FooterContainer' id='FooterContainer' style={{margin:margin}}>
      <ul id='FooterContainerUl' className={`FooterContainer${ShowContact}`}>
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

