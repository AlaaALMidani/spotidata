import React from "react";
import logo from "./logo.svg";
import { MdAudiotrack } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-2/12 min-w-[250px] min-h-screen bg-slate-950 border-r-[1px] items-center justify-start border-solid border-green-500 border-opacity-20 ">


      <div className="flex flex-col h-[450px] fixed">
        <div className=" border-solid border-gray-300 flex pt-10">

          <img className=" w-[50px] mr-3 " src={logo} alt={'no'}></img>

          <div className="text-2xl mr-5 text-gray-400 ml-2 w-3/5 flex items-center justify-center ">
            <b>Anonymous</b>
          </div>
        </div>

        <div className=" text-slate-100 flex flex-col mt-10 justify-between  h-full ">

          <NavLink
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "#1d4ed8" : "#6b7280" };
            }}
          >
            <p className="flex text-xl hover:cursor-pointer  items-center">
              <MdOutlinePodcasts className="mt-1 h-9 w-9" />
              <b className="ml-1 pl-7">General</b>
            </p>
          </NavLink>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return { color: isActive ? "#1d4ed8" : "#6b7280" };
            }}
          >
            <p className="flex text-xl hover:cursor-pointer items-center">
              <BsPersonGear className="mt-1 h-9 w-9" />
              <b className="ml-1 pl-7"> Artists</b>
            </p>
          </NavLink>
          <NavLink
            to="/home1"
            style={({ isActive }) => {
              return { color: isActive ? "#1d4ed8" : "#6b7280" };
            }}>
            <p className="flex text-xl hover:cursor-pointer items-center">
              <MdAudiotrack className="mt-1 h-9  w-9" />
              <b className="ml-1 pl-7"> Tracks</b>
            </p>
          </NavLink>
          <NavLink
            to="/home2"
            style={({ isActive }) => {
              return { color: isActive ? "#1d4ed8 " : "#6b7280" };
            }}>
            <p className="flex text-xl hover:cursor-pointer items-center">
              <IoAlbumsOutline className="mt-1  h-9 w-9" />
              <b className="ml-1 pl-7"> Albums</b>
            </p>
          </NavLink>
        </div>
      </div>



    </div>
  );
};
