import React from 'react';
import { Routes,  Route, } from 'react-router-dom';

//import components
import Mainpage from './Mainpage.js'
import LandingPage from './LandingPage.js'
import Login from './Login.js';
import SignUp from './SignUp.js';
import Navbar from './Navbar';

import '../styles/styles.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<LandingPage />}/>
                    <Route  exact path="/signup" element={<SignUp />}/>
                    <Route  exact path="/login" element={<Login />}/>
                    <Route  exact path="/mainpage" element={<Mainpage />}/>
                </Routes>

            </div>
        </div>
    )
}

export default App;