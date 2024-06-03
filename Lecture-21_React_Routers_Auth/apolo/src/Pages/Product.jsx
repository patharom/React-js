import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import { UseAuth } from './Auth'
const Product = () => {

  const auth = UseAuth()
  
  return (
    <div>
      <h1>This is Product Page</h1>
      <nav className='mt-6'>
        <Link className='me-5' to='productfeatures'>Product Features</Link>
        <Link to='newproduct'>New Product</Link>
        <Outlet/> 
      </nav>
    </div>
  )
}

export default Product
