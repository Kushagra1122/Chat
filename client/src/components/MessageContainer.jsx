import React, { useState } from 'react'
import { useSelected } from '../context/selected';
import { IoSend } from "react-icons/io5";
import Messages from './Messages';
import { useAuth } from '../context/auth';

const MessageContainer = () => {
     const [selected, setselected] = useSelected("");
     const[auth,setAuth]=useAuth("")
     const[msg,setmsg]=useState("")
    const handleSubmit=async(e)=>{
e.preventDefault()
  console.log(msg);
try {
  const response = await fetch(
    `http://localhost:9000/api/message/send/${selected.user._id}`,
    {
      method: "POST",
      headers: {
        Authorization: auth?.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: msg,
      }),
    }
  );

  const res = await response.json();
if(response.ok){
  setmsg("")
}

} catch (error) {
  console.log(error)
}
    }
  return (
    <div className="border border-black rounded-xl bg-pink-100 ">
      <div className=" width ">
        {selected.user?._id ? (
          <div className="text-2xl flex flex-col justify-between ">
            <div className="flex gap-3 p-2 items-center h-16 bg-gray-500 rounded-xl text-white">
              <img
                src={`${selected.user.profile_pic}`}
                alt="user profile"
                className="h-12 w-12"
              />
              <span>{selected.user.fullName}</span>
            </div>
            <div className='flex flex-col gap-1'>
              <div>
                <Messages id={selected.user._id} handleSubmit={handleSubmit} />
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="Send a message..."
                      className="border text-lg rounded-xl block w-full p-3 border-black"
                      value={msg}
                      onChange={(e)=>setmsg(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute flex inset-y-0 end-0 items-center pr-4"
                    >
                      <IoSend />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <span className="text-2xl flex height justify-center overflow-auto items-center p-10">
            Select a user to start conversation
          </span>
        )}
      </div>
    </div>
  );
}

export default MessageContainer
