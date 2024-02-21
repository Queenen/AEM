import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/";
import Tuning from "./pages/TuningPage/";
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
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
