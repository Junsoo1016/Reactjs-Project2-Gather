import React from "react";
import "./UserWindow.css"
import {FaRegUserCircle} from 'react-icons/fa';

const UserBoard = (props) => {
    return (
        <div>
            <div>
            <h1>props.user.id</h1>
            <Link>
            <button>Edit profile</button>
            </Link>
            </div>
            <div>
                <p>First Name: {props.user.firstName}</p>
            </div>
        </div>
    )
}

export default UserBoard