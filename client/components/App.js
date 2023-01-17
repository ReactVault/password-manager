import React from 'react';
import { Routes,  Route, } from 'react-router-dom';

//import components
import Search from './search.js'
import LandingPage from './LandingPage.js'
import Login from './Login.js';
import SignUp from './SignUp.js';
import Navbar from './Navbar';
import img from '../images/vintagecomputers.jpeg'
import '../styles/styles.css';

const App = () => {
    return (
        <div>
            <img className="computerImg"src={img}/>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<LandingPage />}/>
                    <Route  exact path="/signup" element={<SignUp />}/>
                    <Route  exact path="/login" element={<Login />}/>
                    <Route  exact path="/search" element={<Search />}/>
                </Routes>

            </div>
        </div>
    )
}

export default App;