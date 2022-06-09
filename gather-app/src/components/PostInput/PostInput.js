import React from "react";
import './PostInput.css'
import {Link} from 'react-router-dom'
import Address from "../Address/Address";


const PostInput = (props) => {

    const [selected_address, setSelectedAddress] = React.useState([1]);

    
    console.log(selected_address)
    return(
        <div className="inputBox">
            
            <div className="header">
            <h2>Creat a post</h2>
            </div>

            <input onChange={props.handlePostChange} placeholder="Title" name="title"/>
            <input onChange={props.handlePostChange} placeholder="Date" name="date"/>
            <Address postInputForm={props.postInputForm} setPostInputForm={props.setPostInputForm} selected_address={selected_address} set_address={setSelectedAddress}/>
            {/* <input onChange={props.handlePostChange} placeholder="Location" name="location"/> */}
            <input onChange={props.handlePostChange} className="description" placeholder="Descriptioin" name="description"/>

            <Link to="/">
            <button onClick={props.saveUserPost} type='submit' className="submitBtn">Submit</button>
            </Link>
        

        </div>
    )
}

export default PostInput