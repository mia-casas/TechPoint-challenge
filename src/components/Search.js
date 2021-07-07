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
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type a medication" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
        </div>
    )
}

export default Search
