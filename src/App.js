import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  {Sidebar}  from  "./components/SideBar.js"
import {General} from "./pages/General.js"
import {Artist} from "./pages/Artist.js"
import Top from "./pages/Top100.js"
import data from '../src/logic/spotify_data.json'
import State from '../src/logic/logic.js'

function App() {
  const [state] = useState({logic:new State(data)});
  return (
    <div className="App">
      <Router>
          <div className="flex flex-row">
              <Sidebar/>
              <Routes>
                 <Route path="/" element={< General/>} ></Route>
                 <Route path="/home" element={<Top title="Artists" array={state.logic.sortedArtists}/>}></Route>
                 <Route path="/home1" element={<Top title="Tracks" array={state.logic.sortedTracks}/>}></Route>
                 <Route path="/home2" element={<Top title="Tracks" array={state.logic.sortedAlbums}/>}></Route>
                 <Route path="/Artist" element={<Artist />}></Route>
              </Routes>
             
          </div>
      </Router>
    </div>
  );
}

export default App;
