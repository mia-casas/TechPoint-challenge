import React, {useState} from 'react';
import {Button, Form, Label, Input} from 'reactstrap'


const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup'
    }

    const loginToggle = (event) => {
        event.preventDefault()

        setLogin(!login)

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    const signUpFields = () => {
        return !login ? (
            <div >
                <label htmlFor="firstName">First Name:</label>
                <br />
                <input type="text" id="firstName" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}></input>

                <br />

                <label htmlFor="lastName">Last Name:</label>
                <br />
                <input type="text" id="lastName" value={lastName}
                onChange={(e) => setLastName(e.target.value)}></input>
            </div>
        ) : null
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const url = login ? `http://localhost:4000/auth/user/login` : `http://localhost:4000/auth/user/register`
        const bodyObj = login ? {
            email:email,
            password:password,
        } : {
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName,
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.updateToken(json.token))
    }

    return(
        <div class="box">
            <Form onSubmit={(e) => handleSubmit(e)}>
            <h1>{title()}</h1>
            {signUpFields()}
            <Label htmlFor = "email">Email:</Label>
            <br />
            <input type="text" id="email" value={email} onChange={(e) => { return setEmail(e.target.value), console.log(e) }}/>

            <br />
            <label  htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" value={password} 
            onChange ={(e) => setPassword(e.target.value)} />
            <br />
            <button class="login-button" onClick={(e) => loginToggle(e)}>Login/Signup Toggle</button>
            <br />
            <button class="login-button" type="submit">Submit User Data</button>
            </Form>

        </div>
    )
}

export default Auth