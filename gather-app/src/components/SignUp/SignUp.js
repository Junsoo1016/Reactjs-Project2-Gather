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
            </div>
            <input onChange={(e) => props.handleSignUp(e)} placeholder="Id" name="id" />
            <input onChange={(e) => props.handleSignUp(e)} placeholder="Password" name="password" />
            <input onChange={(e) => props.handleValide(e)} placeholder="Confirm password" name="confirmPassword" />
            
            <Link to="/login">
            <button onClick={props.saveUserData} className="submitBtn">Submit</button>
            </Link>

            {props.signUpForm.valid ? <p></p> : <p style={{color: 'red'}}>Password do not match</p>}

        </div>
    )
}

export default SignUp