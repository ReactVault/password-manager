import React, {useState} from 'react';


const Search = () => {
    const [seachInput, setSearchInput] = useState('')
    const handleChange = (searchValue) => {
        setSearchInput(searchValue)}
    return (
        <div>
            <h1>You're in!</h1>
            <h2>Find your password:</h2>
            <input
                type="text"
                placeholder="Search here"
                onChange={(e) => handleChange(e.target.value)}
                />
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
                            <td className="searchResults" id="website">Placeholder</td>
                            <td className="searchResults" id="username">Placeholder</td>
                            <td className="searchResults" id="username">Placeholder</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Search;