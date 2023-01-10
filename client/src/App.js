import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { useState, useEffect } from 'react';
import Logout from './components/Logout';
import HomePage from './components/HomePage';


function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch("/api/me")
      .then(resp => {
        if (resp.ok) {
          resp.json().then(data => {
            console.log(data)
            setUser(data)
          })
        }
      }
    )
  }, [])

  return (
    <div className="App">
      {user ? <Logout setUser={setUser}/> : console.log(user)}
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
