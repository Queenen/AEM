import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Home />
        <Footer />
      </>
    </Router>
  );
}

export default App;
