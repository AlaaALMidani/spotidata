 import React from 'react'
 import somethingImage from './somethings.png'
 import { MdAudiotrack } from "react-icons/md"
 import { IoAlbumsOutline } from "react-icons/io5"
 import { MdOutlinePodcasts } from "react-icons/md"
 import { BsPersonGear } from "react-icons/bs"
 import { NavLink } from 'react-router-dom'
 export const Siderbar = () => {
   return (
     <div className='flex flex-col w-2/12 h-screen bg-slate-950 border-r-2 border-solid border-gray-300'>
        <div className='border-b-2 border-solid  h-1/12 border-gray-300 flex flex-row ' >
            <div className='text-white w-2/5 flex items-center justify-center'>
                <img src={somethingImage}></img>
            </div>
            <div className='text-2xl text-white w-3/5 flex items-center justify-center'>
                <b>Anonymaus</b>
            </div>
        </div>
        <div className=' text-slate-100 flex flex-col h-1/2 justify-around m-auto '>
            <NavLink to="/" style={({isActive})=>{return {color: isActive? "green":"white"}}}><p className='flex text-xl hover:cursor-pointer'><MdOutlinePodcasts className='mt-1'  /><b className='ml-1'> 
            General</b></p></NavLink>
            <NavLink to='/home' style={({isActive})=>{return {color: isActive? "green":"white"}}}><p className='flex text-xl hover:cursor-pointer'><BsPersonGear className='mt-1'/><b className='ml-1' > Artists</b></p></NavLink>
            <p className='flex text-xl hover:cursor-pointer'><MdAudiotrack className='mt-1'/><b className='ml-1'> Tracks</b></p>
            <p className='flex text-xl hover:cursor-pointer'><IoAlbumsOutline className='mt-1'/><b className='ml-1'> Albums</b></p>
        </div>
     </div>
   )
 }
 