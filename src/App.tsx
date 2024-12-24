
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './components/About'
import PortfolioPage from './components/PortfolioPage'
import Contact from './components/Contact'

function App() {

  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<PortfolioPage />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </>
    </Router>
    // <>
    // <Router>

    // </Router>
    //   {/* <NavBar/>
    //   <HeroSection/>
    //   <PortfolioPage/> */}
    // </>
  )
}

export default App
