import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link style={{marginLeft:"2%"}} to="/">Landing Page</Link>
            <Link style={{marginLeft:"2%"}} to="/login">Login</Link>
            <Link style={{marginLeft:"2%"}} to="/signup">Sign Up</Link>
            <Link style={{marginLeft:"2%"}} to="/mainpage">Mainpage</Link>
        </nav>
    )
};

export default Navbar