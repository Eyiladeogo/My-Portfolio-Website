import { useState } from 'react'
import './css/App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
