import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar_left'>Class task</div>
    <div className='navbar_right'>
        <span id='btn'>Home</span>
        <span id='btn'>About</span>
        <span id='btn'>Contact</span>
    </div>


    </div>
  )
}

export default Navbar