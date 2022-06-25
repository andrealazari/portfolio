import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <div className='wrapper'>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Portfolio />
      </div>

      <Footer />
    </>
  )
}

export default App