
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import PortfolioPage from './components/PortfolioPage'
import Footer from './components/Footer'
import About from './components/About';



function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* Home route */}
          <Route path="/about" element={<About />} />
        </Routes>
        <HeroSection />
        <PortfolioPage />
        <Footer />
      </Router>
    </>
  )
}

export default App
