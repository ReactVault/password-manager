import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';



const AddPassword = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        website: '',
        email: '',
        password: ''
    });

    //destructure
    const {  website, email, password,  } = formData; 
    
    const handleChange = (e)=> setFormData({ ...formData, [e.target.name]:e.target.value })
    
    // const redirect = () => {
    //     navigate('/login')
    // }

    return (
        <div>
            <h1 >Add new password</h1>

            <form >
                <div >
                <input
                    type="text"
                    placeholder="Website"
                    name="website"
                    value={website}
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
                
                <input type="submit" className="submit" />
            </form>

        </div>
    )
}


export default AddPassword;