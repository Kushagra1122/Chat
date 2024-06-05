import React, { useEffect } from 'react'
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import Sidebar from '../components/Sidebar';
import MessageContainer from '../components/MessageContainer';
import Container from '../mobile/Container';
import { useSelected } from '../context/selected';
import Users from '../mobile/users';

const Home = () => {
   
      const [selected, setselected] = useSelected("");
    const navigate=useNavigate()
    const[auth,setAuth]=useAuth()
   useEffect(()=>{
    if(auth.user===null){
        navigate('/login')
    }
   })
   
  return (
    <div className="bg-gradient-to-r  from-yellow-400 via-pink-300 to-blue-400 ">
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <div className=" text-3xl flex gap-3 justify-center m-5 ">
          <IoChatbubbleEllipsesOutline size={35} />
          Chatify
        </div>
        <div className="bg-white big  rounded-xl shadow-lg shadow-black p-5">
          <div className="flex flex-col gap-5 items-center m-2  ">
            <div className="flex  rounded-lg gap-5">
              <div>
                <Sidebar />
              </div>
              <div>
                <MessageContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="small bg-white  rounded-xl shadow-lg shadow-black p-4">
        {
          selected?.user?(<><Container/></>):(<><Users/></>)
        }
        </div>
      </div>
    </div>
  );
}

export default Home
