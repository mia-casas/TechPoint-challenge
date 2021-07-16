import React, {useState} from 'react'
import {Media} from 'reactstrap'

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
        <input type="text" class="form-control" placeholder="Lipitor" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <button class="btn btn-secondary" type="button" id="button-addon1">Search</button>
        </div>

        <div class="container">
  <div class="row">
    <div id="drug-container" class="col">
            <ul>
            <h3>Popular Searches</h3>
                <li> -  Lipitor</li>
                <li> -  Levothyroxine</li>
                <li> -  Norvasc</li>
                <li> -  Zoloft</li>
                <li> -  Cozaar</li>
            </ul>
      
    </div>
    <div class="col">
            <ul class="results-lists">
            <h3 class="results" id="pharmacies">Pharmacy</h3>
                <li>Meijer </li>
                <li>Costco</li>
                <li>CVS</li>
                <li>Walgreens</li>
                <li>Walmart</li>
            </ul>
    </div>
    <div class="col" >
             <ul class="results-lists">
             <h3 class="results">Cost</h3>
                <li>$9.45</li>
                <li>$14.99</li>
                <li>$20.40</li>
                <li>$21.15</li>
                <li>$21.15</li>
            </ul>
    </div>
  </div>
</div>


        </div>
            
    )
}

export default Search
