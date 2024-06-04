import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import OtherUsers from "./OtherUsers";



const Sidebar = () => {
  const [search, setSearch] = useState("");
  
 
  return (
    <div className="border border-black p-2 rounded-xl bg-pink-100 ">
      <div className="flex  height overflow-auto  flex-col">
        <div className=" text-lg flex gap-5  justify-center ">
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
          <div className="cursor-pointer py-2">
            <BsThreeDotsVertical size={25} />
          </div>
        </div>
        <div>
          <OtherUsers />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
