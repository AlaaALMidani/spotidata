function Topartistscard(props) {
  return (
    <div className="text-center bg-white bg-opacity-5 rounded-2xl p-4 shadow-lg h-24 w-full border-slate-500 border-opacity-30	 border-[1px] m-8 flex items-center ">
      <img src={props.image} alt="Artist Image" className="rounded-full w-16 h-16 mr-4" />
      <div  className="w-3/4">
        <h2 className="text-xl text-white font-bold m-8 ">{props.title}</h2>
      </div>
      <div className="flex-col" >
        <p className="text-sm text-gray-500">{props.time}</p>
      </div>
    </div>
  );
}

export default Topartistscard;