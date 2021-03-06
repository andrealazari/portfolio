import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/andrealazari/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/andrealazari/" target="_blank"><FaGithub /></a>
      <a href="mailto:a_lazari@hotmail.com" target="_blank"><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials