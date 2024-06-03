import React from 'react'
import Navbar from '../Componetes/Navbar'
import { Link, Outlet } from 'react-router-dom'


const Product = () => {
    return (
        <div>
            <Navbar />
            <h1>This is Product Page</h1>
            <nav className='mt-6'>
                <Link className='me-5' to='productfecture'>Product Feactures</Link>
                <Link to='newproduct'>New Product</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Product
