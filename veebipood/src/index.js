import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks:
// 1. lisada moodul/module/library/teek mis võimaldab navigeerida (võõrad koodilõigud)
// 2. index.js sees lisada BrowserRouter ümber App tagi
// 3. App.js sees luua URLi ja failide seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

