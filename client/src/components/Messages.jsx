import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { useSelected } from '../context/selected';
import Message from './Message';

const Messages = ({id,handleSubmit}) => {
      const [auth, setAuth] = useAuth();
        const [selected, setselected] = useSelected("");
       const [message, setmessage] = useState();
  
    const getmsg=async()=>{
   const response = await fetch(`http://localhost:9000/api/message/${id}`, {
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
    
  
 

  return (
    <div className="overflow-auto newheight">
      {message === null ? (
        <div className="py-44 px-36">Start a conversation </div>
      ) : (
        <div>
          <Message datas={message} />
        </div>
      )}
    </div>
  );
}

export default Messages
