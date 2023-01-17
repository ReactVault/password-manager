import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [signupInfo, setSignupInfo] = useState();
    const [created, setCreated] = useState({});

    const handleChange = async (e) => {
    console.log('handleChange clicked');

    e.preventDefault() //prevents page from refreshing when clicked

    await fetch('../user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // put things you want to add into your database here
            'user_name': username,
            'email': email,
            'password': password,
            'password2': password2
        })
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setCreated(data)
        // if ()
        // alert('Login successful!')
        // return navigate('/login')
    })
}


    useEffect(() => {
    if (Object.hasOwn(created, 'username')) {      
        setSignupInfo('User has been signed up!')
        setTimeout(() => {
        navigate(`/${created.username}`, {state: {...created}});
        }, 1000);
    } else if (Object.hasOwn(created, 'err')) {
        setSignupInfo(created.err)
    }
    })


    const redirect = () => {
        navigate('/login')
    }

    return (
        <div>
            <h1 >Sign Up</h1>
            <p >
               Create Your Account
            </p>
            <form onSubmit={handleChange}>
                <div >
                <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} //e.target.value is value of the input field typed in
                    
                />
                </div>
                <div >
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                   
                />

                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value = {password2}
                    onChange={(e) => setPassword2(e.target.value)} //do we need this onchange since we're not doing anything with it?
            
                />
                </div>
                <input type="submit" className="submit" />
                <p>{signupInfo}</p>
            </form>
            <p >
                Already have an account? 
                <button className="login redirect" onClick={redirect}>Login</button>
            </p>
        </div>
    )
}


export default SignUp;