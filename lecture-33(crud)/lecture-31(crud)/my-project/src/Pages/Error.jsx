import React from 'react'
import Navbar from '../Componets/Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Error = () => {

  const navigate1 = useNavigate()
  return (
    <div>
       <Navbar/>
          <h1 className='text-3xl font-normal text-center'>Error 404</h1>
          <button onClick={() => navigate1(-1)} className=' text-blod bg-black text-white hover:bg-red-600 py-[10px] me-[10px] px-[50px]'>Go Back</button>
          <Link to='/contact'>
          <button className=' bg-black text-white hover:bg-green-500   py-[10px] px-[50px]'>Contact</button>
          </Link>

    </div>
  )
}

export default Error
