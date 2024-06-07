import React, { useEffect, useRef } from 'react'
import { useAuth } from '../context/auth';
import { useSelected } from '../context/selected';
import moment from "moment";
const Message = ({datas}) => {
     const [auth, setAuth] = useAuth();
     const [selected, setselected] = useSelected("");
        const scroll = useRef();
         useEffect(() => {
           scroll.current?.scrollIntoView({ behavior: "smooth" });
         }, [datas]);
  return (
    <div>
      {datas !== undefined ? (
        <div>
          {datas.map((data) => (
            <div ref={scroll}>
              {data.senderId === selected.user._id ? (
                <div className="flex justify-start p-2">
                  <div className="flex items-start gap-2.5 ">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={`${selected.user.profile_pic}`}
                      alt="Sender image"
                    />
                    <div className="flex flex-wrap flex-col w-full max-w-[320px] px-5 border border-black bg-indigo-300 rounded-e-xl rounded-es-xl ">
                      <p className="text font-serif  text-gray-900 ">
                        {data.message}
                      </p>
                      <span className="text-gray-700 text-sm">
                        {moment(data.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end p-2">
                  <div className="flex items-start gap-2.5 ">
                    <div className="flex flex-col w-full max-w-[320px]  px-5 border border-black bg-indigo-300 rounded-b-xl rounded-l-xl">
                      <p className="text font-serif  text-gray-900 ">
                        {data.message}
                      </p>
                      <span className="text-gray-700 text-sm">
                        {moment(data.createdAt).fromNow()}
                      </span>
                    </div>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={`${auth.user.profile_pic}`}
                      alt="Your image"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Message
