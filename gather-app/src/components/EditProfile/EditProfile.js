import React, { useEffect } from "react";
import {Link} from 'react-router-dom'

const EditProfile = (props) => {
    return(
        <div className="signUpBox">
            <div className="header">
            <h2>Edit Profile</h2>
            </div>

            <div className="name">  
                <input onChange={(e) => props.handleProfileForm(e)} className="nameInput" placeholder="First name" name="firstName" />
                <input onChange={(e) => props.handleProfileForm(e)} className="nameInput" placeholder="Last name" name="lastName" />
                <input onChange={(e) => props.handleProfileForm(e)} className="ageInput" placeholder="Age" name="age" />
            </div>
            <input onChange={(e) => props.handleProfileForm(e)} placeholder="Password" name="password" />
            <input onChange={(e) => props.handleProfileForm(e)} placeholder="Email address" name="email" />
            
            <Link to="/account">
            <button onClick={() => props.editUser()} className="submitBtn">Submit</button>
            </Link>

        </div>
    )
}

export default EditProfile