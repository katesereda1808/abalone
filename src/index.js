import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./i18next";
import App from './App';
import "./styles/style.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
