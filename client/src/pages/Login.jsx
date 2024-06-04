import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';
const Login = () => {
    const navigate=useNavigate()
       const [auth, setAuth] = useAuth();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

   useEffect(() => {
     if (auth.user !== null) {
       navigate("/");
     }
   });
    const handlesubmit = async (e) => {
    e.preventDefault();
  
try {
  const response = await fetch("http://localhost:9000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     
      username,
      password,
     
    }),
  });

  console.log(response);
  const res = await response.json();
  console.log(res);
  if (response.ok) {
     setAuth({
       ...auth,
       user: res.user,
       token: res.token,
     });
     localStorage.setItem("auth", JSON.stringify(res));
    toast.success("login successfull");
    navigate('/')
   
    setusername("");
    setpassword("");
    
  } else {
    toast.error(res.message);
  }
} catch (error) {

  console.log(error);
}
    }
  return (
    <div className="bg-gradient-to-r  from-yellow-400 via-pink-300 to-blue-400 ">
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <div className=" text-3xl flex gap-3 justify-center ">
          <IoChatbubbleEllipsesOutline size={35} />
          Chatify
        </div>
        <Zoom>
          <div className="bg-white  w-80 rounded-xl shadow-lg shadow-black p-5 ">
            <div className="flex flex-col gap-5 items-center m-5 ">
              <span className="text-2xl">Welcome Back</span>
              <span className="text-sm text-center">
                Enter your credintials to get logged in
              </span>
            </div>

            <form onSubmit={handlesubmit}>
              <div className="flex flex-col items-center m-5">
                <input
                  className="w-72  h-10 p-5 rounded-xl border border-black bg-pink-100 "
                  type="text"
                  placeholder="User Id"
                  required="required"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center m-5">
                <input
                  className="w-72 input input-bordered h-10 p-5 rounded-xl border border-black bg-pink-100 "
                  type="password"
                  placeholder="Password"
                  required="required"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center m-5">
                <button className="w-72 h-10  rounded-full border border-black bg-pink-400 hover:bg-white  ">
                  Login
                </button>
              </div>
              <div className="flex flex-col items-center m-5">
                <Link
                  to="/signup"
                  className="text-blue-700 cursor-pointer hover:underline"
                >
                  Don't have a account ?
                </Link>
              </div>
            </form>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Login
