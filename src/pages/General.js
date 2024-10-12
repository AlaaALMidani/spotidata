/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Card from "../components/card.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import data from '../logic/spotify_data.json'
import State from '../logic/logic.js'
//bg-gradient-to-r from-slate-950 to-slate-800 
export const General = () => {

  

  const [state] = useState({logic:new State(data)});

  
  return (
    <Swiper className="">
      <SwiperSlide className="">
        <div className=" flex flex-col  items-center justify-start w-full bg-slate-950 min-h-screen">
          <nav className="bg-transparent border-b-gray-500 border-opacity-40 border-b-[1px] dark:bg-gray-900 dark:border-gray-700 p-1 flex mt-10 rounded-lg ">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-blue-700"
                >
                  All
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500"
                >
                  Songs 
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500"
                >
                  Podcast
                </a>
              </li>
            </ul>


          </nav>

          <div className="body justify-center mt-3  ">
            <div className="mr-4 cards">
              <div className="flex justify-end flex-wrap">
                <Card title="Total Plays" value={state.logic.playsNumber} sub={"Times"} />
                <Card title="Total Audios" value={state.logic.differentAudios} sub={"Tracks"} />
                <Card title="Total Listening Time" value={state.logic.spentListingTime/60} sub={"Hour"} />
              </div>  
              <div className="flex justify-end  flex-wrap">
                <Card title="Average listening Time" value={state.logic.dailyAverageTimeSpent/60} sub={"Hour"} />
                <Card title="Preferred listening hour" value={state.logic.preferredHour.toString()+':00'} sub={"UTC"} />
                <Card title="Preferred listening season" value={state.logic.preferredSeason} sub={"Season"} />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-col  items-center justify-start bg-gradient-to-r bg-slate-950 h-screen w-full">
          <nav className="bg-transparent border-b-gray-500 border-opacity-40 border-b-[1px] dark:bg-gray-900 dark:border-gray-700 p-4 flex mt-10 rounded-lg ">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  text-gray-500"
                >
                  All
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3  text-blue-700"
                >
                  Songs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500"
                >
                  Podcast
                </a>
              </li>
            </ul>


          </nav>

          <div className="body justify-center ">
            <div className="mr-4 cards">
              <div className="flex justify-end">
                <Card title="Total Plays" value={state.logic.songsPlaysNumber} sub={"Times"} />
                <Card title="Total Audios" value={state.logic.songsDifferentAudios} sub={"Tracks"} />
                <Card title="Total Listening Time" value={state.logic.songsSpentListingTime/60} sub={"Hour"} />
              </div>
              <div className="flex justify-end">
                <Card title="Average listening Time" value={state.logic.songsDailyAverageTimeSpent/60} sub={"Hour"} />
                <Card title="Preferred listening hour" value={state.logic.songsPreferredHour.toString()+':00'} sub={"UTC"} />
                <Card title="Preferred listening season" value={state.logic.songsPreferredSeason} sub={"Season"} />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" flex flex-col  items-center justify-start bg-gradient-to-r bg-slate-950 h-screen w-full">
          <nav className="bg-transparent border-b-gray-500 border-opacity-40 border-b-[1px] dark:bg-gray-900 dark:border-gray-700 p-4 flex mt-10 rounded-lg ">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  text-gray-500 "
                >
                  All
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500"
                >
                  Songs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-blue-700"
                >
                  Podcast
                </a>
              </li>
            </ul>


          </nav>

          <div className="body justify-center ">
            <div className="mr-4 cards">
              <div className="flex justify-end">
                <Card title="Total Plays" value={state.logic.podcastPlaysNumber} sub={"Times"} />
                <Card title="Total Audios" value={state.logic.podcastDifferentAudios} sub={"Tracks"} />
                <Card title="Total Listening Time" value={state.logic.podcastSpentListingTime/60} sub={"Hour"} />
              </div>
              <div className="flex justify-end">
                <Card title="Average listening Time" value={state.logic.podcastDailyAverageTimeSpent/60} sub={"Hour"} />
                <Card title="Preferred listening hour" value={state.logic.podcastPreferredHour.toString()+':00'} sub={"UTC"} />
                <Card title="Preferred listening season" value={state.logic.podcastPreferredSeason} sub={"Season"} />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
};
export default General;