import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to Password Manager Page 1</h1>
            <button><Link to="login">Login</Link></button>
            <button><Link to="signup">Sign Up</Link></button>
        </div>
    )
}

export default LandingPage;