import React from 'react'
import{
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import User from './User'

const Landing = () => {
    return(
        <div>

            <div id="landing-body">

                <div class="card bg-light text-white" id="main-image">
                <img  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img" alt="pharmicist using technology for prescription pickups" />

                <div class="card-img-overlay">
                <h5 class="card-title" id="landing-title">Technology enhancing healthcare</h5>
                <div class="card-text">
                <p >Access affordable healthcare with easy online transactions. <br />Try it today!</p>
 
                </div>
                

                <div id="search" class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Type a medication" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-secondary" type="button" id="button-addon1">Search</button>
                </div>
                </div>


                </div>

            </div>

        </div>
    );
};

export default Landing;