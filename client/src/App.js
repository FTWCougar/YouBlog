import './App.css';
import {Routes, Route, redirect} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { useState, useEffect } from 'react';


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
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
