import React from "react";

const SignUp = () => {
    return(
        <div className="signUpBox">
            <div className="header">
            <h1>Sign Up</h1>
            </div>

            <div className="name">  
                <input placeholder="First name"/>
                <input placeholder="Last name"/>
            </div>
            <input placeholder="Email address"/>
            <input placeholder="Password"/>
            <input placeholder="Confirm password" />

            <button>Sign Up</button>

        </div>
    )
}

export default SignUp