import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { JackInTheBox } from 'react-awesome-reveal';
import { useSelected } from '../context/selected';

const OtherUsers = () => {
    const [auth,setAuth]=useAuth()
    const[other,setother]=useState([])
    const [selected, setselected] = useSelected("");
    const get=async()=>{
        if(auth.token!==""){
const response = await fetch("http://localhost:9000/api/auth/get", {
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
              className={`rounded-xl overflow-hidden shadow-xl cursor-pointer  transition ease-in-out border border-black ${
                selected.user?._id === user._id
                  ? `bg-indigo-300`
                  : `hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 `
              }`}
            >
              <div className="p-3 ">
                <div className="flex justify-start gap-2 items-center ">
                  <img
                    src={`${user.profile_pic}`}
                    alt="profile"
                    className="h-12 w-12"
                  />
                  <span className="text-lg">{user.fullName}</span>
                </div>
              </div>
            </div>
          </div>
        </JackInTheBox>
      ))}
    </div>
  );
}

export default OtherUsers
