import Topartistscard from "../components/Topartistscard.js";
import Card from "../components/card.js";  
import Topcard from "../components/Topcard.js";  

export function Artist() {  
  return (  
    <div className="bg-slate-950 w-full h-full flex flex-col items-center">  
      <h1 className="text-5xl text-emerald-500 p-8">Artist</h1>  
      <div className="flex flex-col items-center space-y-8">  
        <div className="flex justify-center space-x-8">  
          <Card value="Total Plays" />  
          <Card value="Total Tracks" />  
          <Card value="Total Listening Time" />  
        </div>  
        <div className="flex justify-center space-x-8">  
          <Card value="Percentage of Artist Plays" />  
          <Card value="Position of Top 100" />  
          <Card value="Most Seasonal Listening" />  
        </div>  
        <ol className="flex flex-col md:flex-row flex-wrap items-center justify-center w-full border-2bg-slate-950 p-4 rounded-lg">  
        {Array.from({ length: 20 }).map((_, index) => (  
          <li key={index} className="flex items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4">  
            <span className="text-2xl text-emerald-500 mr-4">{index + 1}.</span>  
            <Topartistscard title={`Artist ${index + 1}`} time="564646" />  
          </li>  
        ))}  
        
      </ol>  
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mt-8">  
        Show More  
      </button>  
      </div>  
    </div>  
  );  
}  
