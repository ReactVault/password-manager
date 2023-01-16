import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
    return (
        <nav className="navbar">
            
            <Link style={{marginLeft:"5%", color: "white", textDecoration: "none"}} to="/">Landing Page</Link>
            <Link style={{marginLeft:"5%", color: "white", textDecoration: "none"}} to="/login">Login</Link>
            <Link style={{marginLeft:"5%", color: "white", textDecoration: "none"}} to="/signup">Sign Up</Link>
            <Link style={{marginLeft:"5%", color: "white", textDecoration: "none"}} to="/mainpage">Mainpage</Link>
        </nav>
    )
};

export default Navbar