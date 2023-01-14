import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    //destructure
    const {  email, password } = formData; 
    
    const handleChange = (e)=> setFormData({ ...formData, [e.target.name]:e.target.value })

    const redirect = () => {
        navigate('/signup')
    }
    
    return (
        <div>
            <h1 >Log in</h1>

            <p >Access your account
            </p>
            <form >
                <div >
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value = {email}
                    onChange={(e) => handleChange(e)}
                   
                />

                </div>
                <div >
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => handleChange(e)}
                    
                />
                </div>
                <input type="submit"  className="submit" />
            </form>
            <p >
                Don't have an account? 
            </p>
            <button className="signup"onClick={redirect}>Sign Up</button>
        </div>
    )
}



export default Login;