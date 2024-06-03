import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const result = useSelector((state) => state.Reducer);
  console.warn("HeaderData called", result);
  return (
    <div className="h-24 bg-blue-500 flex justify-between items-center px-20 text-white font-bold">
      <NavLink className='text-3xl font-bold border-4 h-12 w-24 text-center bg-black hover:bg-blue-800 hover:border-black' to="/">Shop</NavLink>
      <NavLink className='text-2xl font-bold' to="/Cart">
        <div className="relative">
        <FontAwesomeIcon icon={faCartShopping} />
          <span className="absolute right-[-20px] top-[-18px] text-white">{result.length}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;