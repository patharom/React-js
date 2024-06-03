import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">aboutUs</Link></li>
                        <li><Link to="/ContactUs">ContactUs</Link></li>
                        <li><Link to="/page">page</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
