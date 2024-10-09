
import React from "react";
import Card from "../components/card.js";

export const General = () => {
  return (
    <div className=" flex flex-col  items-center justify-start bg-gradient-to-r from-slate-950 to-slate-900 w-10/12">

      <nav className="bg-transparent border-b-gray-500 border-opacity-40 border-b-[1px] dark:bg-gray-900 dark:border-gray-700 p-4 flex mt-10 rounded-lg ">

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

      <div className="body justify-center ">
        <div className="mr-4 cards">
          <div className="flex justify-center">
            <Card title="Total Plays" value={"20"} sub={"Times"} />
            <Card title="Total Tracks" value={"230"} sub={"Tracks"} />
            <Card title="Total Listening Time" value={"420"} sub={"Hour"} />
          </div>
          <div className="flex justify-center">
            <Card title="Average listening Time" value={"420"} sub={"Hour"} />
            <Card title="Prefered listening hour" value={"20:00"} sub={"UTC"} />
            <Card title="Prefered listening season" value={"Summer"} sub={"Season"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General