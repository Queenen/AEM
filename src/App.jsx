import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/";
import Tuning from "./pages/TuningPage/";
import Troubleshoot from "./pages/TroubleshootPage/";
import Contact from "./pages/ContactPage/";
import AEM from "./pages/AboutPage/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuning" element={<Tuning />} />
          <Route path="/feilsøking" element={<Troubleshoot />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/AEM" element={<AEM />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
