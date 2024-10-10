import React from "react";
import logo from "./logo.png";
import { MdAudiotrack } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Siderbar = () => {
  return (
    <div className="flex flex-col w-2/12 min-w-[250px] min-h-screen bg-slate-950 border-r-[1px] items-center justify-start border-solid border-gray-600 ">
      <div className="flex flex-col h-[500px] fixed">
        <div className=" border-solid border-gray-300 flex p-6">
          <img className=" w-[60px] mr-3 " src={logo} alt={'no'}></img>

          <div className="text-2xl mr-5 text-white w-3/5 flex items-center justify-center ">
            <b>Anonymous</b>
          </div>
        </div>

        <div className=" text-slate-100 flex flex-col mt-6 justify-between items-center h-full ">

          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "green" : "white" };
            }}
          >
            <p className="flex text-xl hover:cursor-pointer  items-center">
              <MdOutlinePodcasts className="mt-1 mr-2 h-9 w-9" />
              <b className="ml-1">General</b>
            </p>
          </NavLink>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return { color: isActive ? "green" : "white" };
            }}
          >
            <p className="flex text-xl  hover:cursor-pointer items-center">
              <BsPersonGear className="mt-1 mr-2 h-9 w-9" />
              <b className="ml-1"> Artists</b>
            </p>
          </NavLink>

          <p className="flex text-xl hover:cursor-pointer items-center">
            <MdAudiotrack className="mt-1 h-9 mr-2  w-9" />
            <b className="ml-1"> Tracks</b>
          </p>
          <p className="flex text-xl hover:cursor-pointer items-center">
            <IoAlbumsOutline className="mt-1 mr-2  h-9 w-9" />
            <b className="ml-1"> Albums</b>
          </p>
        </div>
      </div>
    </div>
  );
};
