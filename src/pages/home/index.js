import React, { } from 'react'
import './styles.css'
import Logo from '../../images/logo'
import Header from '../../components/Header'

export default function Home() {
  return (
    <div className='HomeContainer'>
      <Header/>
      <div className="HomeBanner">
        <div className="HomeBannerBox1">
         <Logo/>
        </div>
        <div className="HomeBannerBox2">
          
        </div>
      </div>
    </div>
  )
}

