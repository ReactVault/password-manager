import React from "react";
import { useNavigate } from 'react-router-dom';

//fetch request currently invokes on page load. Need to change to invoke on 'yes' button press
const deletePassword = () => {
    const navigate = useNavigate(); 

    fetch ('/delete', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
        {
            //hardcoded body for testing
            //need to pass down props from parent and replace hardcoded strings
            email: "fs@gmail.com",
            website: "twitter.com"
        })
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            getPasswords(data);
            navigate('/mainpage')
        })

        .catch((error) => console.log(error));

   
    return (
        <div>
            <h1>Are you sure you want to delete?</h1>
            <button onClick={navigate('/mainpage')}>Yes</button>
            <button onClick={navigate('/mainpage')}>No</button>
        </div>
    )
}
export default deletePassword;