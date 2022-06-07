import React from "react";
import "./Login.css"
import {Link} from 'react-router-dom'

const Login = (props) => {
    return(
        <form>
        <div className="loginBox">
            
            <div className="header">
            <h2>Login or create account</h2>
            </div>

            <input onChange={(e) => props.handleLogin(e)} placeholder="Id" name="id"/>
            <input onChange={(e) => props.handleLogin(e)} placeholder="Password" name="password"/>

            <button onClick={(e) => props.validateLogin(e)} className="loginBtn">Log In</button>
            <Link to="/create-new-account">
            <button className="newAccountBtn">Create new account</button>
            </Link>

        </div>
        </form>
    )
}

export default Login