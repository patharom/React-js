import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <div>
      <header className='bg-gray-500 flex items-center justify-center p-[10px] border-3 border-black font-semibold  mx-auto max-xl:container text-white'>
      <div className='container flex items-center  max-w-7xl '>
        <div className='w-[20%]'>
          <Link to="/">
            <div className='font-bold text-[30px]'> L o g o</div>
            </Link>
        </div>
        <nav className='nav-links'>
          <ul className='flex '>
            <li><Link to='/' className='ml-[100px]'>Home</Link></li>
            <li><Link to='/about' className='ml-[100px]'>About</Link></li>
            <li ><Link to='/contact' className='ml-[100px]'>Contact</Link></li>
          </ul>
        </nav>
      </div>
      </header>
    </div>


  )
}

export default Navbar