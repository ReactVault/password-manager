import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginInfo, setLoginInfo] = useState();
    const [login, setLogin] = useState({});

    const verifyUser = async (e) => {
        console.log('login clicked');

        e.preventDefault();

        await fetch('../user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'email': email,
            'password': password
          }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setLogin(data);
        })
      }
      
      useEffect(() => {
        if (Object.hasOwn(login, 'email')) {
          setLoginInfo('Login Success!')
          setTimeout(() => {
            navigate(`/${login.email}`, {state: {...login}});
          }, 1000);
        } else if (Object.hasOwn(login, 'err')) {
          setLoginInfo(`${login.err}`)
        }
      })


    const redirect = () => {
        navigate('/signup')
    }
    
    return (
        <div>
            <h1 >Log in</h1>

            <p >Access your account
            </p>
            <form  onSubmit={verifyUser}>
                <div >
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                   
                />

                </div>
                <div >
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                </div>
                <input type="submit"  className="submit" />
            </form>
            <p>{loginInfo}</p>

            <p >
                Don't have an account? 
            </p>
            <button className="signup redirect" onClick={redirect}>Sign Up</button>
        </div>
    )
}



export default Login;