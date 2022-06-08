import React from "react";
import "./Post.css" 

const Post = (props) => {
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
            
           <button className="joinBtn" >Ask to join</button>
           
       </form> 
    )
}

export default Post