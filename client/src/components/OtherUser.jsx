import React, { useState } from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { useOnline } from '../context/online';

const OtherUser = ({user}) => {
      const [Online, setOnline] = useOnline();
      const[isOnline,setisOnline]=useState()
    if (Online !== undefined) {
      setisOnline( Online?.includes(user._id));
    }
  return (

    <div className="p-3 ">
      <div className="flex justify-between gap-2 items-center ">
        <div className="flex items-center gap-2">
          <img
            src={`${user.profile_pic}`}
            alt="profile"
            className="h-12 w-12"
          />
          <span className="text-lg">{user.fullName}</span>
        </div>
       {
 
        isOnline?(<span className='text-green-700'>
          <RiRadioButtonLine/>
        </span>):(<></>)
       }
       
      </div>
    </div>
  );
}

export default OtherUser
