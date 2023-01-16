import React from 'react';
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <h1>Welcome to Password Manager</h1>
            <div className="buttons">
                <button className="login" ><Link style={{ color: "white", textDecoration: "none"}} to="login">Login</Link></button>
                <button className="signup"><Link style={{ color: "white", textDecoration: "none"}}to="signup">Sign Up</Link></button>
                
            </div>
        </div>
    )
}

export default LandingPage;