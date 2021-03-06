import React from "react";
import './SignUp.css'
import {Link} from 'react-router-dom'

const SignUp = (props) => {
    return(
        <div className="signUpBox">
            <div className="header">
            <h2>Sign Up</h2>
            </div>

            <div className="name">  
                <input onChange={(e) => props.handleSignUp(e)} className="nameInput" placeholder="First name" name="firstName" />
                <input onChange={(e) => props.handleSignUp(e)} className="nameInput" placeholder="Last name" name="lastName" />
                <input onChange={(e) => props.handleSignUp(e)} className="ageInput" placeholder="Age" name="age" />
            </div>
            <input onChange={(e) => props.handleSignUp(e)} placeholder="Id" name="userId" />
            <input onChange={(e) => props.handleSignUp(e)} placeholder="Password" name="password" />
            <input onChange={(e) => props.handleSignUp(e)} placeholder="Email address" name="email" />
            
            <Link to="/login">
            <button onClick={() => props.createUser()} className="submitBtn">Submit</button>
            </Link>

            {/* {props.signUpForm.valid ? <p></p> : <p style={{color: 'red'}}>Password do not match</p>} */}

        </div>
    )
}

export default SignUp