
function TopArtistsCard(props) {
  return (
    <div className=" bg-gray-700 bg-opacity-5 border-green-500 border-opacity-30 rounded-2xl shadow-lg h-24 w-full  border-[1px] mt-2 flex items-center ">
      <img src={`./download${(props.index) % 6 + 1}.jpg`} alt={`./%${(props.index) % 6 + 1}.jpg`} className="rounded-full ml-3 object-cover w-16 h-16 mr-4" />
      <div className="">
        <h2 className="text-xl text-blue-700 font-bold ">{props.title[0]}<span className="text-gray-400">{props.title.split('').slice(1, props.title.length).join('')}</span></h2>
      </div>

    </div>
  );
}

export default TopArtistsCard;