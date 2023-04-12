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
import Footer from "./components/Footer/Footer";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Contacts from './components/pages/Contacts/Contacts';
import Partners from './components/pages/Partners/Partners';
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import LegalInfo from "./components/pages/LegalInfo/LegalInfo";

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
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/legal_information" element={<LegalInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
