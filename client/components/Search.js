import React, {useState} from 'react';


const Search = () => {
    const [seach, searchInput] = useState('')
    const handleChange = e => searchInput(e.target.value)
    console.log(e.target.value);
    return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={e=> handleChange(e)}
                value={searchInput} 
                />
        </div>
    )
}

export default Search;