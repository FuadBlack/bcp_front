import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Portfolio from "./Component/Porfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import RiconConstraction from "./Component/RiconConstruction";
import "./App.sass";
import { Home } from "./Component/Home";
import { Services } from "./Component/Services";
import { Projects } from "./Component/Projects";
import { Contact } from "./Component/Contact";
import { Header } from "./Component/Header";



function App() {
  console.log(window.location.href)
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ricon_constraction" element={<RiconConstraction />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
