import React from 'react'
// import Web3 from 'web3'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import{
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
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
                <NavbarBrand ><Link to="/" id="logo">Quick Scripts</Link></NavbarBrand>
                <NavLink className="nav-links" href='/dashboard'>Drug Search</NavLink>
                <NavLink className="nav-links" href='/account'>My Account</NavLink>
                <Nav className='ml-auto' navbar>

                    <form class="container-fluid justify-content-start">
                    <Button id="login-button" type="button"><Link id="login-link" to = '/auth'>Sign Up or Login</Link></Button>
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
        <footer id="footer">
            <Row>
                <a id="footer" target="_blank" href="https://github.com/mia-casas/TechPoint-challenge">&copy; 2021 Quick Scripts</a> 
            </Row>
        </footer>
    </div>
  );
}

export default App;
