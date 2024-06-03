import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' border-2 border-black'>
      <header className='flex items-center  bg-gray-300 p-2 border-2 border-solid border-gray-300'>
        <div className=""> {/* Center the Logo horizontally */}
          <Link to="/">
            <div className='text-4xl font-bold hover:text-cyan-50'>Logo</div>
          </Link>
        </div>

        <nav className='flex justify-center w-full    '>
          <ul className=''>
          <NavLink className="ps-2 font-bold text-2xl mx-5 hover:text-cyan-50 " to='/'>Home</NavLink>
          <NavLink  className="ps-2 font-bold text-2xl mx-5 hover:text-cyan-50" to='/about'>About</NavLink>
          <NavLink className="ps-2 font-bold text-2xl mx-5 hover:text-cyan-50" to='/contact'>Contact</NavLink>
          </ul>

        </nav>

      </header>
    </div>

  )
}

export default Navbar
