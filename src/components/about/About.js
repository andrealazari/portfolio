import React from 'react'
import './about.css'
import ME from '../../assets/web-development.png'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    
    <section id='about'>
       <div className='empty-div'></div>
      <section className='all__about'>
        <h5>Get to know</h5>
        <h2>About</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">

            <p>I am a Software Engineer who enjoys working on projects with different data types and problems to be solved. My Industrial Engineer background gave me experience in planning, logical thinking and working in crossfunctional teams to achieve the desired goals.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          

        </div>
      </section>
    </section>
  )
}

export default About