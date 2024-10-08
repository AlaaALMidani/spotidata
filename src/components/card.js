import React from 'react';

function Card(props) {
  return (
    <>
    <div className="text-center	 bg-white bg-opacity-5 rounded-2xl p-4 shadow-lg h-64 w-64 border-slate-300	 border m-8">
      <h2 className="text-xl text-white font-bold">{props.value}</h2><hr/>
      
    </div>
    </>
  );
}

export default Card;