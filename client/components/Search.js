import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const Search = () => {
    const navigate = useNavigate();

    const [password, getPassword] = useState('');;

    useEffect(() => {
        console.log('useEffect ran');

        fetch ('/passwords', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                getPassword(data);
            })
            .catch((error) => console.log("ERROR"));
        }, []) 

    const displayPasswords = []
    if (passwords) {
        passwords.forEach(([password]) => {
            console.log('password id', password._id)
            console.log('password', password)
             displayPlants.push(<PlantInfo key={plant._id} plant={plant} />)
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
                        <tr>
                            <th>Website</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td className="website">Placeholder</td>
                            <td className="username">Placeholder</td>
                            <td className="password">Placeholder</td>
                        </tr>
                    </tbody>
                </table>
                <button className="addPassword" onClick={() => buttonPress('/add')}>Add new password</button>
                <button className="updatePassword" onClick={() => buttonPress('/update')}>Update password</button>
                <button className="deletePassword" onClick={() => buttonPress('/delete')}>Delete password</button>

            </section>
        </div>
    )
}

export default Search;