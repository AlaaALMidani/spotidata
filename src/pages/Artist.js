import TopArtistsCard from  "../components/TopArtistsCard.js"
import Card from "../components/card.js";
import data from '../logic/spotify_data.json'
import State from '../logic/logic.js'
import { useState } from "react";
import { useLocation } from "react-router-dom";
export function Artist(props) {
  const [state] = useState({ logic: new State(data) });
  const location = useLocation()
  const { name } = location.state
  const [array] = useState(state.logic.getTop20OfArtist(name))

  return (
    <div className="bg-slate-950 w-full h-full flex flex-col items-center">
      <h1 className="text-5xl text-emerald-500 p-8">{name}</h1>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex justify-center space-x-8">
          <Card title="Total Plays" value={state.logic.getPlaysOfArtist(name)} />
          <Card title="Total Tracks" value={state.logic.getDifferentTracksOfArtist(name)} />
          <Card title="Total Listening Time" value={state.logic.getTimeListeningOfArtist(name)} />
        </div>
        <div className="flex justify-center space-x-8">
          <Card title="Percentage of Artist Plays" value={state.logic.getPercentageOfArtist(name)} />
          <Card title="Position of Top 100" value={state.logic.getPositiionOfAritst(name)} />
          <Card title="Most Seasonal Listening" value={state.logic.getFavoriteSeasonOfArtist(name)} />
        </div>
        <ol className="flex flex-col md:flex-row flex-wrap items-center justify-center w-full border-2bg-slate-950 p-4 rounded-lg">
          {array.slice(0, 20).map((_, index) => (
            <li key={index} className="flex items-center justify-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <span className="text-2xl text-emerald-500 mr-4">{index + 1}.</span>
              <TopArtistsCard title={_} time="564646" />
            </li>
          ))}

        </ol>
      </div>
    </div>
  );
}  
