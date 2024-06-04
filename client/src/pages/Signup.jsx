import React, { useEffect, useState } from 'react'
import { Zoom } from "react-awesome-reveal";
import toast from "react-hot-toast";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
const Signup = () => {

const[fullName,setfullName]=useState("")
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [confirmPassword, setconfirmPassword] = useState("");
const [gender, setgender] = useState("");
  const navigate = useNavigate();
   const [auth, setAuth] = useAuth();
   useEffect(() => {
     if (auth.user !== null) {
       navigate("/");
     }
   });
 const handlechange=async(value)=>{
   setgender(value);

 }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
   if(gender!==""){
try {
  const response = await fetch(`${window.location.origin}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    }),
  });

  console.log(response);
  const res = await response.json();
  console.log(res);
  if (response.ok) {
    toast.success(res.message);
    navigate("/login");
    setfullName("");
    setusername("");
    setpassword("");
    setconfirmPassword("");
    setgender("");
  } else {
    toast.error(res.message);
  }
} catch (error) {

  console.log(error);
}
    
   }
    else{
        toast.error("Please select a gender")
    }
  }
  
  return (
    <div className="bg-gradient-to-r  from-yellow-400 via-pink-300 to-blue-400 ">
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <div className=" text-3xl flex gap-3 justify-center">
          <IoChatbubbleEllipsesOutline size={35} />
          Chatify
        </div>
        <Zoom>
          <div className="bg-white  w-80 rounded-xl shadow-lg shadow-black p-5">
            <div className="flex flex-col gap-5 items-center m-5 ">
              <span className="text-2xl">Sign Up</span>
              <span className="text-sm">Create Your Account</span>
            </div>

            <form onSubmit={onSubmitHandler}>
              <div className="flex flex-col items-center m-5">
                <input
                  className="w-72  h-10 p-5 rounded-xl border border-black bg-pink-100 "
                  type="text"
                  placeholder="Full Name"
                  required="required"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center m-5">
                <input
                  className="w-72  h-10 p-5 rounded-xl border border-black bg-pink-100 "
                  type="text"
                  placeholder="Username"
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
                <input
                  className="w-72  h-10 p-5 rounded-xl border border-black bg-pink-100 "
                  type="password"
                  placeholder="Confirm Password"
                  required="required"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center my-4">
                <div className="flex gap-3 items-center justify-center">
                  <p>Gender:</p>

                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    defaultValue="male"
                    onClick={() => handlechange("male")}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    defaultValue="female"
                    onClick={() => handlechange("female")}
                  />
                  <label htmlFor="female">Female</label>
                  <br />
                </div>
              </div>
              <div className="flex flex-col items-center m-5">
                <button className="w-72 h-10  rounded-full border border-black bg-pink-400 hover:bg-white  ">
                  Register
                </button>
              </div>
              <div className="flex flex-col items-center m-5">
                <Link
                  to="/login"
                  className="text-blue-700 cursor-pointer hover:underline"
                >
                  Already have a account ?
                </Link>
              </div>
            </form>
          </div>
        </Zoom>
      </div>
    </div>
  );
}


export default Signup
