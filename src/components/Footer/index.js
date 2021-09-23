import React, { } from 'react'
import { Email, GitHub, Linkedin, Logo } from '../../images/Images'
import './styles.css'


export default function Home() {
  return (
    <div className='FooterContainer'>
      <ul>
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

