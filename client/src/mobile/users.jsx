
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import OtherUsers from "../components/OtherUsers";
import { useAuth } from "../context/auth";
import {  Modal } from "antd";
import { useOnline } from "../context/online";
import { useSocket } from "../context/socket";
import { useSelected } from "../context/selected";

const Users = () => {
      const [Online, setOnline] = useOnline();
      const navigate = useNavigate();
      const handleCancel = () => {
        setIsModalOpen(false);
      };
     const [isModalOpen, setIsModalOpen] = useState(false);
     const showModal = () => {
       setIsModalOpen(true);
     }
 const logout = () => {
   setAuth({
     ...auth,
     user: null,
     token: "",
     
   });
   

   localStorage.removeItem("auth");
  
   toast.success("You have logged out ");
   navigate("/login");
 };
 console.log(Online)
     const [search, setSearch] = useState("");
       const [auth, setAuth] = useAuth("");
        const [Socket, setSocket] = useSocket(null);
        const [selected,setselected]=useSelected()
  return (
    <div className="border border-black p-2 rounded-xl bg-pink-100 ">
      <div className="flex  height overflow-auto  flex-col">
        <div className=" text-lg flex gap-5  justify-center ">
          <button onClick={showModal} className="cursor-pointer py-2">
            <img
              src={`${auth?.user?.profile_pic}`}
              alt="profile pic"
              className="h-10 w-10"
            />
          </button>
          <form className="flex items-center  gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-black rounded-md px-2 "
              type="text"
              placeholder="Search..."
            />
            <button type="submit" className="btn  ">
              <BiSearchAlt2 className="w-6 h-6 outline-none" />
            </button>
          </form>
        </div>
        <div>
          <OtherUsers />
        </div>
        <Modal
          
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="flex flex-col w-24 h-24 gap-2 items-center">
            <img
              src={`${auth?.user?.profile_pic}`}
              alt="profile pic"
              className="h-16 w-16"
            />
            <p className="text-xl">{auth?.user?.username}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={logout}
              className=" bg-red-600 text-white border-black hover:bg-white hover:text-black cursor-pointer p-3 rounded-lg text-xl"
            >
              logout
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Users
