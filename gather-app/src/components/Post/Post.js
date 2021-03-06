import React from "react";
import "./Post.css" 
import {FaRegUserCircle, FaRegCommentDots} from 'react-icons/fa';
import {RiBookmarkLine, RiMoreFill} from 'react-icons/ri';

const Post = (props) => {
    console.log(props.askToJoin);
    return(
       <form className="post">
           <div className="postTop">
            <div className="userInfo">
                <FaRegUserCircle size={35}/>
                <p className="userName">jpark92</p>
            </div>
            <RiMoreFill size={30}/>
           </div>

           <div className="Title">
            <p className="key">Title:</p>
            <p className="value">{props.title}</p>
           </div>

           <div className="Date">
            <p className="key">Date:</p>
            <p className="value">{props.date}</p>
           </div>

           <div className="Location">
            <p className="key">Location:</p>
            <p className="value">{props.location}</p>
           </div>

           <div className="Description">
            <p className="key">Description:</p>
            <p className="value">{props.description}</p>
           </div>
            
           <div className="postBottom">
            <FaRegCommentDots size={30} />
           <button className="joinBtn" onClick={(e) => props.askToJoin(e)}> {!props.requested ? "Ask to join" : "Requested" } </button>
           <RiBookmarkLine className="bookmarkBtn" size={30}/>
            </div> 
           
       </form> 
    )
}

export default Post