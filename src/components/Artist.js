import Card from "./card.js";
import Topcard from "./Topcard.js";
import artistImage from "./flower.png"; 

function Artist() {
  return (
    <div className="bg-slate-950 flex flex-col items-center">
      <div className="w-full flex m-8 ml-40">
        <img src={artistImage} alt="Artist Image" className="w-40 h-40 rounded-full mb-4 ml-4 mt-10" />
        <h1 className="text-5xl text-green-600 p-8 m-8">Artist Name</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Card title="Total Plays" />
          <Card title="Total Tracks" />
          <Card title="Total Listening Time" />
        </div>
        <div className="flex justify-center">
          <Card title="Percentage of Artist Plays" />
          <Card title="Position of Top 100" />
          <Card title="Most Season Listening" />
        </div>
        <div className=" items-center justify-between  flex-row-reverse ">
                 <select className=" py-2.5 px-0 text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200  flex flex-col-reverse">
                    <option>Last year</option>
                   <option>Since beginning</option>
                  </select>
          </div>
          <div className =' flex justify-center w-3/5' >
               <Topcard value ="Top 20 Songs"/>
          </div>
      </div>
    </div>
  );
}

export default Artist;