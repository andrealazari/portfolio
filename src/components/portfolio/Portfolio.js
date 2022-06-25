import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/tictactoe.jpeg'
import IMG2 from '../../assets/brewery-app.png'
import IMG3 from '../../assets/social-clone.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <h3>Social Media App</h3>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="Social Media Clone" />
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/andrealazari/social_media_app" className='btn' target='_blank'>Code</a>
            <a href="https://socialmediasweeter.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          <p>Single-Page Application social media clone inspired by Twitter. Users can create an account, login and sign out. They can create a new post, like other users posts, delete their own posts and edit their own profile. Developes in group</p>
          <p><span>Tech Stack: JavaScript, Node.js, Express.js, PostgreSQL, HTML, CSS</span></p>
          
        </article>
        <article className='portfolio__item'>
          <h3>Brewery App</h3>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="Brewery App" />
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/andrealazari/brewery-app" className='btn' target='_blank'>Code</a>
            <a href="https://my-brewery-app.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
          <p>Full-stack database CRUD application in MVC for searching and saving breweries into your account. Users can sign-up, login and logout from their accounts. They can search for their favourite breweries and save it to their list. Users can add a comment and a rate. They can also see other users reviews and like it in a feed.</p>
          <p><span>Tech Stack: Ruby, Sinatra, HTML, CSS, Postgresql</span></p>
          
        </article>
        <article className='portfolio__item'>
          <h3>Tic-Tac-Toe</h3>  
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Tic Tac Toe" />
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/andrealazari/tic-tac-toe" className='btn' target='_blank'>Code</a>
            <a href="https://andrealazari.github.io/tic-tac-toe/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          <p>Classic Mario themed Tic Tac Toe game. Users can select player to start the game. The game has sound effects.</p>
          <p><span>Tech Stack: HTML, CSS, Javascript</span></p>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio