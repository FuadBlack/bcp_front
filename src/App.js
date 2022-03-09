import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,useParams
} from "react-router-dom";
import RiconConstraction from "./RiconConstraction";
import "./App.sass";
import { Home } from "./Component/Home";
import { Header } from "./Component/Header";
import AboutUs from "./Component/aboutUs";
import { Contact } from "./Component/Contact";
import { Projects } from "./Component/Projects";
import Portfolio from "./Component/Porfolio";
import Footer from "./Component/Footer";
import { Services } from "./Component/Services";

function StartProj() {
  const { slug } = useParams("services", "aboutUs", "projects", "contact");
  return (
    <div>
      <button className="btn btn-outline success">Layihəyə başla</button>
    </div>
  );
}

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route
              path="portfolio/riconConstruction"
              element={<RiconConstraction />}
            />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
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
