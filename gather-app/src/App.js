import { useState } from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Board from './components/Board/Board'
import PostInput from './components/PostInput/PostInput';
import HowToUse from './components/HowToUse/HowToUse';

function App() {

  const [userData, setUserData] = useState({
    name: "",
    password: "",
    emailAddress: ""
  })

  const [userPost, setUserPost] = useState({
    image: "",
    title: "",
    date: "",
    location: "",
    description: "",
  })

  const handlePostChange = (e) => {
    setUserPost({
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App">
      
      <nav>
        <div className='navBox'>
          <h1 className='title'>Gather</h1>
          <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/howToUse">
            <li>How to use</li>
            </Link>
            <li>Login</li>
          </ul>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/howToUse" element={<HowToUse/>} />
          <Route path="/post-input" element={<PostInput handlePostChange={handlePostChange}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
