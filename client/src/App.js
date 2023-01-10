import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';


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
      {user ? <NavBar user={user} setUser={setUser}/> : null}
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<HomePage user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
