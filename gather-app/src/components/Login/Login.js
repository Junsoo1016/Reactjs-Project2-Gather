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

            <Link to="/">
            <button className="loginBtn" onClick={(e) => props.validateLogin(e)}>Log In</button>
            </Link>
            
            <Link to="/create-new-account">
            <button className="newAccountBtn">Create new account</button>
            </Link>

        </div>
        </form>
    )
}

export default Login