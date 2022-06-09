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
    valid: true,
    logIn: false
  })

  const handleValide = (e) => { 
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value}) 
    if(signUpForm.password === signUpForm.confirmPassword) {
      setSignUpForm({
        firstName: signUpForm.firstName,
        lastName: signUpForm.lastName,
        id: signUpForm.id,
        password: signUpForm.password,
        confirmPassword: e.target.value,
        valid: true,
        logIn: false,
    })
  } else {
    setSignUpForm({
      firstName: signUpForm.firstName,
      lastName: signUpForm.lastName,
      id: signUpForm.id,
      password: signUpForm.password,
      confirmPassword: e.target.value,
      valid: false,
      logIn: false,
    })
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
    password: ""
  })

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
      setUser({
        firstName: user.firstName,
        lastName: user.lastName,
        id: user.id,
        password: user.password,
        logIn: true,
      })
    } else {
      alert("password not correct");
    }
  }


  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   const user = userData.find((user) => user.id === e.)
  // }
  
  //Post Input
  const [postInputForm, setPostInputForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    complete: false,
    coordinates: null,
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
          <Link className='navTitle' to="/">
          <h1 className='title'>Gather</h1>
          </Link>
          <ul>
            <Link className='navLink' to="/">
              <li>Home</li>
            </Link>
            <Link className='navLink' to="/howToUse">
              <li>How To Use</li>
            </Link>
              {!user.logIn ? <Link className='navLink' to="/login"><li>Log In</li></Link> : <li>Hi {user.firstName} </li>} 
              {/* <Link className='navLink' to="/login"><li>Log In</li></Link>
            } else {
              <li>`Hi ${user.name}`</li>
            } */}

          </ul>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Board postList={postList}/>} />
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} validateLogin={validateLogin}/>} />
          <Route path="/create-new-account" element={<SignUp handleSignUp={handleSignUp} handleValide={handleValide} saveUserData={saveUserData} signUpForm={signUpForm}/>} />
          <Route path="/post-input" element={<PostInput handlePostChange={handlePostChange} saveUserPost={saveUserPost} postInputForm={postInputForm} setPostInputForm={setPostInputForm}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
