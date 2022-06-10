import React from "react";  
import Post from "../Post/Post";
import {Link} from 'react-router-dom'
import Map from "../Map/Map";
import './Board.css'
import UserWindow from "../UserWindow/UserWindow";


const Board = (props) => {

    const posts = props.postList.map((post, index) => {
        return <Post 
        title = {post.title}
        date = {post.date}
        location = {post.location}
        description = {post.description}
        complete = {post.complete}
        coordinates = {post.coordinates}
        requested = {post.requested}
        askToJoin={props.askToJoin}
        index={index}
        />
    }) 
    // console.log(props);
    return(
        <div className="board">
            
            <Map postList={props.postList}/>
            {/* <UserWindow user = {props.user}/> */}

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