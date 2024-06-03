import React from 'react'
import Navbar from '../Componetes/Navbar'
import { useNavigate } from 'react-router-dom'


const Shop = () => {


  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <h1 className='text-2xl font-bold text-center'>This is Shop Page</h1>
      <button onClick={()=> navigate('/ordersummary')}>Order Place</button>
    </div>
  )
}

export default Shop
