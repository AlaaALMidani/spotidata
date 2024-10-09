import React from "react";
import Card from "../components/card.js";

export const General = () => {
  return (
    <div className=" flex flex-col  items-center justify-start  bg-slate-950 w-10/12">
      <nav class="bg-white border-gray-200  dark:bg-gray-900 dark:border-gray-700 w-1/6 flex mt-10 rounded-lg ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="hidden w-full md:block md:w-auto">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                >
                  All
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Songs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Podcast
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="body justify-center ">
        <div className="mr-4 cards">
          <div className="flex justify-end">
            <Card title="Total Plays" value ={"20"}/>
            <Card title="Total Tracks" />
            <Card title="Total Listening Time" />
          </div>
          <div className="flex justify-end">
            <Card title="Average listening Time" />
            <Card title="Prefered listening hour" />
            <Card title="Prefered listening season" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default General;
