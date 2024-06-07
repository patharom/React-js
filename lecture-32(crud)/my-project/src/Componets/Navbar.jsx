import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <div>
      <header className='flex bg-gary-400 items-center  justify-around bg-gray-200 p-2 border-2 border-solid   border-gray-300'>
        <div className=''>
          <a href=''>
          <Link to="/">
            <div className='text-4xl font-bold'> L o g o</div>
            </Link>
          </a>
        </div>
        <nav className='nav-links'>
          <ul className='flex '>
            <li className='px-2'><Link to='/'>Home</Link></li>
            <li className='px-2'><Link to='/about'>About</Link></li>
            <li className='px-2'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
      {/* <h1 className='text-2xl font-bold text-center'> this is NAV page</h1> */}
    </div>


  )
}

export default Navbar