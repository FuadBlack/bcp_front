import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import RiconConstraction from './RiconConstraction';
import './App.sass';
import { Home } from './Component/Home';
import { Header } from './Component/Header';
import AboutUs from './aboutUs';
import OurServices from './OurServices';
import { Contact } from "./Component/Contact";
import { Projects } from "./Component/Projects";

import OurServicesInner from './OurServices_inner';


function App() {
  console.log(window.location.href)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route
              path="Portfolio/RiconConstruction"
              element={<RiconConstraction />}
            />
                      <Route path="projects" element={<Projects />} />

               <Route path="contact" element={<Contact />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="OurServices" element={<OurServices />} />
            <Route
              path="OurServices/OurServices_inner"
              element={<OurServicesInner />}
            />
          </Route>
        </Routes>
      
      </Router>

    </div>
  );
}

function Layout() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
