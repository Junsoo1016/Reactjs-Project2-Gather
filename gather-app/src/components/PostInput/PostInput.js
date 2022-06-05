import React from "react";
import './PostInput.css'

const PostInput = (props) => {
    return(
        <form>
        <div className="inputBox">
            
            <div className="header">
            <h2>Creat a post</h2>
            </div>

            <input onChange={(e) => props.handlePostChange(e)} placeholder="Image" name="image"/>
            <input onChange={(e) => props.handlePostChange(e)} placeholder="Title" name="title"/>
            <input onChange={(e) => props.handlePostChange(e)} placeholder="Date" name="date"/>
            <input onChange={(e) => props.handlePostChange(e)} placeholder="Location" name="location"/>
            <input onChange={(e) => props.handlePostChange(e)} className="description" placeholder="Descriptioin" name="description"/>

            <button className="signUpBtn">Sign Up</button>

        </div>
        </form>
    )
}

export default PostInput