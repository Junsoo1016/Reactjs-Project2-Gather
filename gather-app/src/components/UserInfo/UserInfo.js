import React from "react";

const UserInfo = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.user.firstName}</p>
        </div>
    )
}

export default UserInfo