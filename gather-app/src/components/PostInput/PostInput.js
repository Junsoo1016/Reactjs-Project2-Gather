import React from "react";
import './PostInput.css'
import {Link} from 'react-router-dom'

const PostInput = (props) => {
    return(
        <div className="inputBox">
            
            <div className="header">
            <h2>Creat a post</h2>
            </div>

            <input onChange={props.handlePostChange} placeholder="Title" name="title"/>
            <input onChange={props.handlePostChange} placeholder="Date" name="date"/>
            <input onChange={props.handlePostChange} placeholder="Location" name="location"/>
            <input onChange={props.handlePostChange} className="description" placeholder="Descriptioin" name="description"/>

            <Link to="/">
            <button onClick={props.saveUserPost} type='submit' className="submitBtn">Submit</button>
            </Link>
        </div>
    )
}

export default PostInput