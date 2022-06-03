import { useState } from 'react';
import './App.css';

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

  return (
    <div className="App">

    </div>
  );
}

export default App;
