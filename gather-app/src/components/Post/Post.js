import React from "react";
import "./Post.css" 

const Post = () => {
    return(
       <form className="post">

           <img className="postImage" style={{width: '180px', height: '120px', backgroundColor: 'grey'}} src="#" alt="#" />

           <div className="Title">
            <p className="key">Title:</p>
            <p className="value"></p>
           </div>

           <div className="Date">
            <p className="key">Date:</p>
            <p className="value"></p>
           </div>

           <div className="Location">
            <p className="key">Location:</p>
            <p className="value"></p>
           </div>

           <div className="Description">
            <p className="key">Description:</p>
            <p className="value"></p>
           </div>
            
           <button className="joinBtn" >Ask to join</button>
           
       </form> 
    )
}

export default Post