import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap_scripts/bootstrap.css';
import './bootstrap_scripts/bootstrap.css.map';
import './bootstrap_scripts/bootstrap-grid.css';
import './bootstrap_scripts/bootstrap-grid.css.map';
import './bootstrap_scripts/bootstrap-reboot.css';
import './bootstrap_scripts/bootstrap-reboot.css.map';
import Auth from './auth/Auth';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
