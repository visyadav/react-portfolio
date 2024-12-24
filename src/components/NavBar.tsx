import { Link } from "react-router-dom"


function NavBar() {
  return (
    <nav className=' bg-purple-100 py-5 sticky'>
      <ul className=' justify-center flex gap-10'>
        <li className=' cursor-pointer hover:text-purple-600'><Link to="/">Home</Link></li>
        <li className=' cursor-pointer hover:text-purple-600'><Link to="/About">About</Link></li>
        <li className=' cursor-pointer hover:text-purple-600'><Link to="/Portfolio">Portfolio</Link></li>
        <li className=' cursor-pointer hover:text-purple-600'><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
