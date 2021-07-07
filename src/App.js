import React from 'react'
// import Web3 from 'web3'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import{
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'

import Auth from './components/SignUp'
import User from './components/User'
import Search from './components/Search'
import Landing from './components/Landing'


function App() {
  return (
    <div className="App">
      <Router>
                <Navbar className='header'>
                <NavbarBrand ><Link to="/">Quick Scripts</Link></NavbarBrand>
                <NavLink href='/dashboard'>App Search</NavLink>
                <NavLink href='/account'>My Account</NavLink>
                <Nav className='ml-auto' navbar>

                    <form class="container-fluid justify-content-start">
                    <button class="btn btn-outline-info me-2" type="button"><Link to = '/auth'>Sign Up / Login</Link></button>
                    </form>

                </Nav>
            </Navbar>

            <Switch>
              <Route exact path='/'><Landing /></Route>
              <Route exact path='/auth'><Auth /></Route>
              <Route exact path='/dashboard'><Search /></Route>
              <Route exact path='/account'><User /></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
