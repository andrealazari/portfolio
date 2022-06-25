import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='empty-div'></div>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Andrea Lazari</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
      <HaderSocials />
      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </header>
  )
}

export default Header