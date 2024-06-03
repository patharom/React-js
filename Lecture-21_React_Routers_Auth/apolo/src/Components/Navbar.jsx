import React from 'react'
import { Link ,  NavLink } from 'react-router-dom'
import { UseAuth } from '../Pages/Auth'

const Navbar = () => {


    const navStyle = ({isActive}) => {
        return{
            color:isActive ? "white" : "black"
        }
    }

    const auth = UseAuth()

    return (
        <div>
            <header>
                <div className="header_logo">
                    <Link to="/">
                        <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" alt="" />
                    </Link>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><NavLink style={navStyle} to="/">Home</NavLink></li>
                        <li><NavLink style={navStyle} to="aboutus">AboutUs</NavLink></li>
                        <li><NavLink style={navStyle} to="contact">ContactUs</NavLink></li>
                        <li><NavLink style={navStyle} to="shop">Shop</NavLink></li>
                        <li><NavLink style={navStyle} to="blog">Blog</NavLink></li>
                        <li><NavLink style={navStyle} to="product">Product</NavLink></li>
                        <li><NavLink style={navStyle} to="user">User</NavLink></li>
                        <li><NavLink style={navStyle} to='profile'>Profile</NavLink></li>
                        {
                            !auth.user ? <li><NavLink style={navStyle} to='login'>Login</NavLink></li> : <li><NavLink style={navStyle} to='profile'>{auth.user}</NavLink></li>
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
