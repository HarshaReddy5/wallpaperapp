import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

ReactGA.initialize("G-67L0536NDX");
ReactGA.send("pageview");

import App from './App';
import './index.css'; // or App.css if styles are here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

