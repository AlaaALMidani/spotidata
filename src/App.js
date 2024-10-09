import React from "react"
import {Fintess}  from "./pages/Fintess.js"
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import { System } from "./pages/system.js"
import { Tracking } from "./pages/Tracking.js"
import  {Siderbar}  from "./pages/siderbar.js"
import {General} from "./pages/General.js"
function App() {
  return (
    <div className="App">
      <Router>
          <div className="flex flex-row">
              <Siderbar/>
              <Routes>
                 <Route path="/" element={< General/>} ></Route>
                 <Route path="/home" element={<Tracking/>}></Route>
              </Routes>
             
          </div>
      </Router>
    </div>
  );
}

export default App;
