import React from 'react';
import ReactDOM from 'react-dom/client';
import Map from './map';
import Area_CheckBox from './Component/CheckBox/Area_CheckBox.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Map></Map>
    <Area_CheckBox></Area_CheckBox>
  </React.StrictMode>
);
