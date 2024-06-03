
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo'>
                <a href="">
                    <img src={"https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"} alt="" />
                </a>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><a href="../pages/Home.jsx">Home</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
