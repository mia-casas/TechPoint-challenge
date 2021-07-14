import React, {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState({
        drug: ''
    })
    const onSubmitForm = (e) => {
        e.preventDefault();
        const {drug} = e.target
        setSearch({
            drug: drug.value
        })
    }
    
    return(
        <div>

        
        <div class="input-group mb-3" id="search">
        <input type="text" class="form-control" placeholder="Type a medication" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <button class="btn btn-secondary" type="button" id="button-addon1">Search</button>
        </div>

        <div id="drug-container">
            <ul>
            <h3>Popular Searches</h3>
                <li> -  Lipitor</li>
                <li> -  Levothyroxine</li>
                <li> -  Norvasc</li>
                <li> -  Zoloft</li>
                <li> -  Cozaar</li>
            </ul>
        </div>

        </div>
    )
}

export default Search
