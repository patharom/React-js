import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// NavLink use class hover change colore

const Navbar = () => {



    // navStyle funtion throw


    const navStyle = ({ isActive }) => {
        return {
            color: isActive ? "white" : "black"
        }
    }


    return (
        <div>
            <header>
                <div className="header_logo">
                    <a href="./index.html">
                        <img className="logo"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9Khj-BASp9kVP7d-4wsTWbwlf71eTNwmms2GAdvDYg&s"
                            alt="" />
                    </a>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><NavLink style={navStyle} to="/">Home</NavLink></li>
                        <li><NavLink style={navStyle} to="aboutUs">aboutUs</NavLink></li>
                        <li><NavLink style={navStyle} to="Contect">Contect</NavLink></li>
                        <li><NavLink style={navStyle} to="Page">Page</NavLink></li>
                        <li><NavLink style={navStyle} to="shop">Shop</NavLink></li>
                        <li><NavLink style={navStyle} to="Blog">Blog</NavLink></li>
                        <li><NavLink style={navStyle} to="product">product</NavLink></li>

                    </ul>
                </nav>
            </header>
            <h1>this is index page</h1>
        </div>
    )
}

export default Navbar
