import React from 'react';
import { useSpring,animated } from 'react-spring';

function Card(props) {
  function Number({n}){
    const {number}= useSpring({
      from:{number:0},
      number:n,
      config:{mass:1,friction:10,tension:20}
    })
    console.log("test")
    return <animated.div>{number.to((val) => Math.floor(val))}</animated.div>
  }
  return (
    <>
    <div className="text-center	 bg-white bg-opacity-5 rounded-2xl p-4 shadow-lg h-64 w-64 border-slate-500 border-opacity-30	 border-[1px] m-8">
      <h2 className="text-xl text-white ">{props.title}</h2> 
      <div className='h-[1px] w-3/4 m-auto mt-2 bg-opacity-30 bg-white'/>
      <div className='text-green-600 text-5xl mt-10'>{typeof props.value === "number"? <Number n={props.value}/>: props.value}</div>
      <div></div>
    </div>
    </>
  );
}

export default Card;