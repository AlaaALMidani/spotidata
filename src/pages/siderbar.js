import React from "react";
import logo from "./logo.png";
import { MdAudiotrack } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Siderbar = () => {
  return (
    <div className="flex flex-col w-2/12 min-w-[250px] h-screen bg-slate-950 border-r-[1px]  justify-start border-solid border-gray-600 ">
      <div className=" border-solid border-gray-300 flex p-6">
        <img className=" w-[80px] mr-3 " src={logo}></img>

        <div className="text-2xl mr-5 text-white w-3/5 flex items-center justify-center">
          <b>Anonymaus</b>
        </div>
      </div>

      <div className=" text-slate-100 flex flex-col h-1/2  m-auto ">
        
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "white" };
          }}
        >
          <p className="flex text-xl hover:cursor-pointer">
            <MdOutlinePodcasts className="mt-1" />
            <b className="ml-1">General</b>
          </p>
        </NavLink>
        <NavLink
          to="/home"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "white" };
          }}
        >
          <p className="flex text-xl hover:cursor-pointer">
            <BsPersonGear className="mt-1" />
            <b className="ml-1"> Artists</b>
          </p>
        </NavLink>

        <p className="flex text-xl hover:cursor-pointer">
          <MdAudiotrack className="mt-1" />
          <b className="ml-1"> Tracks</b>
        </p>
        <p className="flex text-xl hover:cursor-pointer">
          <IoAlbumsOutline className="mt-1" />
          <b className="ml-1"> Albums</b>
        </p>
      </div>
    </div>
  );
};
