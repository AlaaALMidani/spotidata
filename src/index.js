import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
//import General from './components/General.js';
//import Artists from './components/Artists.js';
import Artist from './components/Artist.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Artist />
  </React.StrictMode>
);


reportWebVitals();
