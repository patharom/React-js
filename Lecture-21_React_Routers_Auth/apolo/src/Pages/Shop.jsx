import React from 'react'
import { useNavigate } from 'react-router-dom'

const Shop = () => {


  const navigate = useNavigate()

  return (
    <div>
       <h1 className='text-2xl font-bold text-center'>This Is Shop Page</h1>
       <button onClick={() => navigate('/ordersummary')}>Order Place</button>
    </div>
  )
}

export default Shop
