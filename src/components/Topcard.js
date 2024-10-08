import React from 'react';

function Card(props) {
  return (
    <>
    <div className="text-center	 bg-white bg-opacity-5 rounded-2xl p-4 shadow-lg h-64 w-1/2 border-slate-300	 border m-8">
      <h2 
      className="text-xl text-white font-bold">
        {props.value} 
        <select className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'>
            <option>last year</option> 
            <option>since beginning</option>
        </select>
            </h2>
    </div>
    </>
  );
}

export default Card;