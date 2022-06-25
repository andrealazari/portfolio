import React from 'react'
import Resume from '../../assets/Andrea Lazari Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} target="_blank" className='btn'>Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA