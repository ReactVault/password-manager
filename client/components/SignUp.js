import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    //destructure
    const {  name, email, password, password2 } = formData; 
    
    const handleChange = (e)=> setFormData({ ...formData, [e.target.name]:e.target.value })
    
    const redirect = () => {
        navigate('/login')
    }

    return (
        <div>
            <h1 >Sign Up</h1>
            <p >
               Create Your Account
            </p>
            <form >
                <div >
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => handleChange(e)}

                    
                />
                </div>
                <div >
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value = {email}
                    onChange={(e) => handleChange(e)}
                   
                />

                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password}
                    onChange={(e) => handleChange(e)}
                    
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value = {password2}
                    onChange={(e) => handleChange(e)}
                    
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Signup" />
            </form>
            <p className="my-1">
                Already have an account? 
                <button onClick={redirect}>Login</button>
            </p>
        </div>
    )
}


export default SignUp;