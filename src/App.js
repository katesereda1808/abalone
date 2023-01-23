import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contacts from './pages/Contacts/Contacts';
import Partners from './pages/Partners/Partners';
// import styles from "./styles.module.css";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>

    </div>
  );
}

export default App;
