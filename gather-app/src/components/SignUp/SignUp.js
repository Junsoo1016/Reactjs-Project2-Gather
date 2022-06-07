import React from "react";
import './SignUp.css'

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

            <button onClick={props.saveUserData} className="signUpBtn">Submit</button>

            {props.signUpForm.valid ? <p>Valid</p> : <p>Password do not match</p>}

        </div>
    )
}

export default SignUp