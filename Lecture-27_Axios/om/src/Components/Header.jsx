import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {

    const result = useSelector((state) => state.Reducer)

    console.warn('HeaderData Called' , result);

    return (
        <div className='h-24 bg-green-600 flex justify-between items-center px-20'>
            <NavLink to="/" className='font-bold text-2xl'>
                Shop
            </NavLink>
            <NavLink to="/cart">
                <div className='flex'>
                <FaCartShopping  className='text-2xl relative -top-1 right-1'/>
                    <span className='absolute top-4 right-20 font-bold'>{result.length}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Header