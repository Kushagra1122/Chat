
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useAuth } from './context/auth';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

function App() {
  const[auth,setAuth]=useAuth('')
  const[Socket,setSocket]=useState(null)
  useEffect(()=>{
if(auth){
  console.log("here")
  const socket=io("http://localhost:9000/",{

  })
  setSocket(socket)
}
  },[auth])
  console.log(Socket)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
