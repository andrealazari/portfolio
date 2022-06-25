import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <h5>Let's Talk</h5>
      <h2>Contact</h2>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/andrealazari/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/andrealazari/" target="_blank"><FaGithub /></a>
        <a href="mailto:a_lazari@hotmail.com" target="_blank"><MdEmail /></a>
        <a href="tel:0402291758" target="_blank"><AiFillPhone /></a>
      </div>

      <div className='footer__copyright'>
        <small>Site made with React</small>
        <small>Inspired by Egator</small>
        <small>&copy; 2022 Andrea Lazari</small>
      </div>
    </footer>
  )
}

export default Footer