import { useState } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Board from './components/Board/Board'
import PostInput from './components/PostInput/PostInput';
import HowToUse from './components/HowToUse/HowToUse';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {

  //Sign Up
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    id: "",
    password: "",
    confirmPassword: "",
    valid: 0,
    logIn: false
  })

  const handleValide = (e) => { 
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value}) 
    if(signUpForm.password === signUpForm.confirmPassword) {
      setSignUpForm(...signUpForm, {valid: true})
    } else {
      setSignUpForm(...signUpForm, {valid: false})
    }
  }

  const [userData, setUserData] = useState([])

  const handleSignUp = (e) => {  
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value   
    })
  }

  const saveUserData = () => { 
    setUserData([...userData, signUpForm])    
  }

  //Log In
  const [loginForm, setLoginForm] = useState({
    id: "",
    password: "",
    logIn: false
  })

  const handleLogin = (e) => {  
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value   
    })
  }

  const validateLogin = (e) => {
    e.preventDefault()
    const user = userData.find((user) => user.id === loginForm.id)
    if(user.password===loginForm.password) {
      console.log("welcome");
    } else {
      console.log("password not correct");
    }
  }


  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   const user = userData.find((user) => user.id === e.)
  // }
  
  //Post Input
  const [postInputForm, setPostInputForm] = useState({
    image: "",
    title: "",
    date: "",
    location: "",
    description: "",
    complete: false
  })

  const handlePostChange = (e) => {  
    setPostInputForm({
      ...postInputForm,
      [e.target.name]: e.target.value   
    })
  }

  const [postList, setPostList] = useState([])

  const saveUserPost = () => { 
    setPostList([...postList, postInputForm])    
  }
  
  return (
    <div className="App">
      
      <nav>
        <div className='navBox'>
          <Link to="/">
          <h1 className='title'>Gather</h1>
          </Link>
          <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/howToUse">
            <li>How to use</li>
            </Link>
            <Link to="/login">
            <li>Log In</li>
            </Link>
          </ul>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Board postList={postList}/>} />
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} validateLogin={validateLogin}/>} />
          <Route path="/create-new-account" element={<SignUp handleSignUp={handleSignUp} handleValide={handleValide} saveUserData={saveUserData} signUpForm={signUpForm}/>} />
          <Route path="/post-input" element={<PostInput handlePostChange={handlePostChange} saveUserPost={saveUserPost}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
