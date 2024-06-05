import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { JackInTheBox } from 'react-awesome-reveal';
import { useSelected } from '../context/selected';
import { useOnline } from '../context/online';

import OtherUser from './OtherUser'
const OtherUsers = () => {
    const [auth,setAuth]=useAuth()
    const[other,setother]=useState([])
    const [selected, setselected] = useSelected("");
    const[online,setOnline]=useOnline()
    const get=async()=>{
        if(auth.token!==""){
const response = await fetch(`http://localhost:9000/api/auth/get`, {
  method: "GET",
  headers: {
    Authorization: auth?.token,
  },
});

const res = await response.json();

if(response.ok){
    setother(res)
}
        }
        
    }
    useEffect(()=>{
get()
    },[])
    console.log(selected)
  return (
    <div className="flex flex-col justify-center  gap-5  m-5">
      {other.map((user) => (
        <JackInTheBox>
          <div
            key={user._id}
            onClick={() =>
              setselected({
                user
              })
            }
          >
            <div
              className={`rounded-xl overflow-hidden shadow-xl cursor-pointer  transition ease-in-out border  border-black ${
                selected.user?._id === user._id
                  ? `bg-indigo-300`
                  : `hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 `
              }`}
            >
              <OtherUser user={user}/>
            </div>
          </div>
        </JackInTheBox>
      ))}
    </div>
  );
}

export default OtherUsers
