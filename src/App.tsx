import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import PortfolioPage from './components/PortfolioPage'


function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <PortfolioPage/>
    </>
  )
}

export default App
