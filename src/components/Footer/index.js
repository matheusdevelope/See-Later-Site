import React, { } from 'react'
import { Email, GitHub, Linkedin } from '../../images/Images'
import './styles.css'


export default function Home({ShowContact, margin}) {
  return (
    <div className='FooterContainer' id='FooterContainer' style={{margin:margin}}>
      <ul id='FooterContainerUl' className={`FooterContainer${ShowContact}`}>
        <li>
          
          <a href='https://github.com/matheusdevelope/See-Later' 
         target="_blank">
           <GitHub/>
         </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/matheus-dev/' target='_blank'>
            <Linkedin/>
          </a>
          
        </li>
        <li>
          <a href='#ContactContainer'>
             <Email />
          </a>
         
        </li>
      </ul>
    </div>
  )
}

