import React from "react";  
import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";
import {Routes, Route, Link} from 'react-router-dom'
import './Board.css'

const Board = () => {
    return(
        <div>
            <div className="map">

            </div>

            <Link to="/post-input">
                 <button className="postBtn">Create a new post</button>
            </Link>
            <div className="postArea">
            <Post />
            </div>

        </div>
    )
}

export default Board