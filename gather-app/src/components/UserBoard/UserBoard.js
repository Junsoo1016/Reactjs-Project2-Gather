import React from "react";
import {FaRegUserCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom'

const UserBoard = (props) => {

    return (
        <div>
            <div>
            <FaRegUserCircle size={150}/>
            <h1>{props.user.id}</h1>
            <Link to="/edit-profile">
            <button>Edit profile</button>
            </Link>
            </div>
            <div>
                <p id="key">First Name: <span id="value">{props.user.firstName}</span></p>
                <p id="key">Last Name: <span id="value">{props.user.lastName}</span></p>
                <p id="key">Age: <span id="value">{props.user.age}</span></p>
                <p id="key">Email: <span id="value">{props.user.email}</span></p>
            </div>
        </div>
    )
}

export default UserBoard