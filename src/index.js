import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
//import General from './components/General.js';
import Artists from './components/Artists.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Artists />
  </React.StrictMode>
);


reportWebVitals();
