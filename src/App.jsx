import React from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Client from './sections/Client'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <DarkModeProvider>
        <Header/>
        <Hero/>
        <About/>
        <PopularAreas/>
        <Properties/>
        <Services/>
        <Client/>
        <Contact/>
        <Footer/>
      </DarkModeProvider>
    </div>
  )
}

export default App
