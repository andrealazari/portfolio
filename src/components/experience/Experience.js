import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {DiRuby} from 'react-icons/di'
import {SiPostgresql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Know</h5>
      <h2>Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            
            <AiFillHtml5 className='experience__icon'/>
            <div className='experience__individual'>
              <h4>HTML</h4>
            </div>
            
            <DiCss3 className='experience__icon'/>
            <div className='experience__individual'>
              <h4>CSS</h4>
            </div>
            
            <SiJavascript className='experience__icon'/>
            <div className='experience__individual'>
              <h4>JavaScript</h4>
            </div>
            
            <FaReact className='experience__icon'/>
            <div className='experience__individual'>
              <h4>React.js</h4>
            </div>

          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            
            <FaNodeJs className='experience__icon'/>
            <div className='experience__individual'>
              <h4>Node.js / Express.js</h4>
            </div>
            
            <DiRuby className='experience__icon'/>
            <div className='experience__individual'>
              <h4>Ruby</h4>
            </div>
            
            <SiPostgresql className='experience__icon'/>
            <div className='experience__individual'>
              <h4>PostgreSql</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience