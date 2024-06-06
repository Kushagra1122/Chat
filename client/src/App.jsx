
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useAuth } from './context/auth';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'
import { useSocket } from './context/socket';
import { useOnline } from './context/online';

function App() {
  const[auth,setAuth]=useAuth('')
  const[Socket,setSocket]=useSocket(null)
  const[Online,setOnline]=useOnline()
  
  useEffect(()=>{
if (auth.token !== "") {
  console.log("here");
  const socket = io(`http://localhost:9000`, {
    query: {
      id: auth.user._id,
    },
  });
  setSocket(socket);
  socket?.on("getOnlineUsers", (onlineUsers) => {
    setOnline(onlineUsers);
  });
   return () => socket.close();
}
else{
      if(Socket){
     
    setSocket(null);
      }
    }
  },[auth])
  console.log(Socket)
  console.log(Online);
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
