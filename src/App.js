import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.sass";
import "./i18n";

import { Home } from "./Component/Home";
import { Header } from "./Component/Header";
import AboutUs from "./Component/aboutUs";
import { Contact } from "./Component/Contact";
import { Projects } from "./Component/Projects";
import Footer from "./Component/Footer";
import { Services } from "./Component/Services";
import Portfolio from "./Component/Portfolio";
import RiconConstraction from "./Component/RiconConstraction";
import OurServicesInner from "./Component/OurServices_inner";
import { Context } from "./Context";
import axios from "axios";

function App() {
  //Api
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://192.168.1.11:1111/api/main")
      .then((res) => {
        setData(res.data);
    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Context.Provider value={{ data, setData }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route
                path="portfolio/riconConstraction"
                element={<RiconConstraction />}
              />
              <Route
                path="services/OurServices_inner"
                element={<OurServicesInner />}
              />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
            </Route>
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

function Layout() {
  return (
    <div className="sectionn container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
