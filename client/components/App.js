import React from 'react';
import { Routes,  Route, } from 'react-router-dom';

//import components
import Mainpage from './Mainpage.js'
import LandingPage from './LandingPage.js'
import Login from './Login.js';
import SignUp from './SignUp.js';
import Navbar from './Navbar';
import AddPassword from './AddPassword.js';
import UpdatePassword from './UpdatePassword.js';
import DeletePassword from './DeletePassword.js'
// import img from '../images/vintagecomputers.jpeg'

import '../styles/styles.css';

const App = () => {
    return (
        <div>
            {/* <img className="computerImg"src={img}/> */}
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<LandingPage />}/>
                    <Route  exact path="/signup" element={<SignUp />}/>
                    <Route  exact path="/login" element={<Login />}/>
                    <Route  exact path="/mainpage" element={<Mainpage />}/>
                    <Route  exact path="/add" element={<AddPassword />}/>
                    <Route  exact path="/delete" element={<DeletePassword />}/>
                    <Route  exact path="/update" element={<UpdatePassword />}/>
                </Routes>

            </div>
        </div>
    )
}

export default App;