import React, {useState} from 'react';


const Search = () => {
    const [seachInput, setSearchInput] = useState('')
    const handleChange = (searchValue) => {
        setSearchInput(searchValue)}
    return (
        <div>
            <h1>Find Your Password:</h1>
            <input
                type="text"
                placeholder="Search here"
                onChange={(e) => handleChange(e.target.value)}
                />
            <section>
            <h2>"Search Results"</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>fakeuser</td>
                        <td>fakepassword</td>
                    </tr>
                </tbody>
            </table>
         </section>
        </div>
    )
}

export default Search;