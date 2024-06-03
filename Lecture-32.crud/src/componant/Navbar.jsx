// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          {/* <img src="/path/to/your/logo.png" alt="Logo" /> */}
          OM
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white text-lg hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-lg hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
