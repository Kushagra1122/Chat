import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { useSelected } from '../context/selected';
import Message from './Message';
import { useSocket } from '../context/socket';

const Messages = ({id,handleSubmit}) => {
      const [auth, setAuth] = useAuth();
        const [selected, setselected] = useSelected("");
       const [message, setmessage] = useState();
        const [Socket, setSocket] = useSocket(null);
  
    const getmsg=async()=>{
   const response = await fetch(`${window.location.origin}/api/message/${id}`, {
     method: "GET",
     headers: {
       Authorization: auth?.token,
     },
   });
  

const res = await response.json();

if(response.ok){
        setmessage(res.data);
}


}

        
    
    useEffect(()=>{
getmsg()
    
    },[selected ,handleSubmit])
    
  useEffect(()=>{
  Socket?.on("newMessage",(newMessage)=>{
    setmessage([...message,newMessage])
  })
  return ()=>Socket?.off('newMessage')
  },[Socket,setmessage,message])
 

  return (
    <div className="overflow-auto newheight">
      {message === null ? (
        <div className="padding">Start a conversation </div>
      ) : (
        <div>
          <Message datas={message} />
        </div>
      )}
    </div>
  );
}

export default Messages
