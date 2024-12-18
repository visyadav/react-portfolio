import React from 'react'

function NavBar() {
  return (
    <nav className=' bg-purple-100 py-5 sticky'>
      <ul className=' justify-center flex gap-10'>
        <li className=' cursor-pointer hover:text-purple-600'>Home</li>
        <li className=' cursor-pointer hover:text-purple-600'>About</li>
        <li className=' cursor-pointer hover:text-purple-600'>Portfolio</li>
        <li className=' cursor-pointer hover:text-purple-600'>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
