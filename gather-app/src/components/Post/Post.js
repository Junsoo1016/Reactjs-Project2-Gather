import React from "react";
import "./Post.css" 

const Post = (props) => {
    console.log(props.askToJoin);
    return(
       <form className="post">

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
            
           <button className="joinBtn" onClick={(e) => props.askToJoin(e)}> {!props.requested ? "Ask to join" : "Requested" } </button>
           
       </form> 
    )
}

export default Post