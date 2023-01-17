import React from "react";
import { useNavigate } from 'react-router-dom';

const deletePassword = ({website, email}) => {
    const navigate = useNavigate(); //move this into Delete functional component
    //close function before return
    //try invoking delete password function with button click



    console.log('inside deletePassword');

    //do we need to pass in the email of where the button was pressed?? 

    fetch ('/', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
        {
            email: email,
            website: website,
        })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            getPasswords(data);
            navigate('/mainpage')
        })

        .catch((error) => console.log(error));

   
    return (
        <div>
            <h1>Are you sure you want to delete?</h1>
            <button onClick={(website, password) => deletePassword((website, password))}>Yes</button>
            <button onClick={navigate('/mainpage')}>No</button>
        </div>
    )
}
export default deletePassword;