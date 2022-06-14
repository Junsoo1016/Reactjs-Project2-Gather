import React from "react";
import "./UserWindow.css"

const UserWindow = (props) => {
    console.log(props);
    return (
        <div className="userWindow">
            <div className="profile">
                <p>Profile</p>
            </div>
            
            <div className="saved">
                <p>Saved</p>
            </div>

            <div className="setting">
                <p>Setting</p>
            </div>
        </div>
    )
}

export default UserWindow