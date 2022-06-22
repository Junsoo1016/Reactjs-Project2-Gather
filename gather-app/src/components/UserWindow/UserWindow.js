import React from "react";
import "./UserWindow.css"
import {FaRegUserCircle} from 'react-icons/fa';

const UserWindow = (props) => {
    console.log(props);
    return (
        <div className="userWindow">
            <div className="profile">
                <FaRegUserCircle size={35} id="userCircle"/>
                <p className="userName">{props.user.firstName} {props.user.lastName}</p>
            </div>

            <div>
                <p className="aLink aLinkP">Profile</p>
            </div>
            
            <div className="saved">
                <p className="aLink">Saved</p>
            </div>

            <div className="setting">
                <p className="aLink">Setting</p>
            </div>

            <div className="signOut">
                <p className="aLink">Sign Out</p>
            </div>

            <div>
                <p className="aLink">Delete Account</p>
            </div>
        </div>
    )
}

export default UserWindow