import React from "react";  
import Post from "../Post/Post";
import PostInput from "../PostInput/PostInput";
import {Link} from 'react-router-dom'
import Map from "../Map/Map";

import './Board.css'

const Board = (props) => {

    const posts = props.postList.map((post, index) => {
        return <Post 
        image = {post.image}
        title = {post.title}
        date = {post.date}
        location ={post.location}
        decriptioin ={post.description}
        />
    }) 

    return(
        <div>
            {/* <div className="map">
            Map
            </div> */}
            <Map />

            <Link to="/post-input">
                 <button className="postBtn">Create a new post</button>
            </Link>
            <div className="postArea">
            {posts}
            </div>

        </div>
    )
}

export default Board