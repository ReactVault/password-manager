import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const Search = () => {
    const navigate = useNavigate();

    const [passwords, getPasswords] = useState('');
    const [email, getEmail] = useState('');
    const [website, getWebsite] = useState('');
    const [user_name, getUser_Name] = useState('');

    useEffect(() => {
        console.log('useEffect ran');

        fetch ('/passwords', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
            {
                email: "fs@gmail.com"
            })
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                getPasswords(data);
            })
            .catch((error) => console.log(error));
        }, []) 

    // const displayPasswords = []
    // if (passwords) {
    //     passwords.forEach(([password]) => {
    //         console.log('password id', password._id)
    //         console.log('password', password)
    //          displayPlants.push(<PlantInfo key={plant._id} plant={plant} />)
    //     })
        
    // }

    const updatePassword = () => {
        console.log('inside updatePassword');

        fetch ('/', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
            {
                email: "fs@gmail.com",
                website: "twitter.com",
                password: "newPASSWORD"
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                getPasswords(data);
            })
            .catch((error) => console.log(error));
    }

    

    const displayPasswords = []
    if (passwords) {
        passwords.forEach((password) => {
            // console.log(‘password id’, password._id) 
            // console.log(‘password’, password)
            displayPasswords.push(
            <tr className="passwords" website = {password.website} email = {password.email}>
                <td><strong>Email: </strong>{password.email}</td>
                <td><strong>Username: </strong>{password.user_name}</td>
                <td><strong>Password: </strong>{password.password}</td>
                <td><strong>Website: </strong>{password.website}</td>
                <button className="deletePassword" website={password.website} email={password.email} onClick={() => buttonPress('/delete')}>Delete</button>
                <button className="updatePassword" onClick={() => buttonPress('/update')}>Update </button>
            </tr>
            )
        })
    }


    const buttonPress = (input) => {
        console.log(input)
        navigate(input);
    };

    return (
        <div>
            <h1>You're in!</h1>
            <h2>Find your password:</h2>
            {/* <input
                type="text"
                placeholder="Search here"
                onChange={(e) => handleChange(e.target.value)}
                /> */}
            <section>
                <h3 id="results">Results:</h3>
                <table className="searchResults">
                    <thead>
                        {displayPasswords}

                    </thead>
                    {/* <tbody>
                        <tr>
                            <td className="website">Placeholder</td>
                            <td className="username">Placeholder</td>
                            <td className="password">Placeholder</td>
                        </tr>
                    </tbody> */}
                </table>
                <button className="addPassword" onClick={() => buttonPress('/add')}>Add new password</button>
                {/* <button className="updatePassword" onClick={() => buttonPress('/update')}>Update password</button>
                <button className="deletePassword" onClick={() => buttonPress('/delete')}>Delete password</button> */}

            </section>
        </div>
    )
}

export default Search;